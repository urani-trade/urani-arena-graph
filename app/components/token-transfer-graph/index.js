"use client";

import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
import './index.css';

export function TokenTransferGraph({
    solutions,
    onSolutionSelected,
    tokenMetadata
}) {
    const [solutionGraphs, setSolutionGraphs] = useState(null);
    const renderContainerRef = useRef(null);
    const pathDivRefs = useRef([]);

    useEffect(() => {
        if (solutions?.length > 0) {
            const solutionsGraphs = solutions.map((solution, index) => {
                let agentName = solution.agent.name;

                // Extract nodes
                let nodes = new Set();
                solution.route.forEach(routeStep => {
                    nodes.add(routeStep.srcName);
                    nodes.add(routeStep.dstName);
                });
                nodes = Array.from(nodes).map(name => {
                    const routeStep = solution.route.find(step => step.srcName === name || step.dstName === name);
                    const imageUrl = routeStep ? (routeStep.srcName === name ? routeStep.srcImage : routeStep.dstImage) : '';
                    return {
                        id: `${agentName}-${name}`,
                        name,
                        agentName,
                        imageUrl,
                        solutionIndex: index
                    };
                });

                // Extract links
                let links = solution.route.map(routeStep => {
                    let formattedAmount = (routeStep.sentAmount / Math.pow(10, tokenMetadata[routeStep.sentToken].decimals)).toFixed(tokenMetadata[routeStep.sentToken].decimals);
                    return {
                        source: `${agentName}-${routeStep.srcName}`,
                        target: `${agentName}-${routeStep.dstName}`,
                        value: `${formattedAmount} ${tokenMetadata[routeStep.sentToken].symbol}`,
                        id: `${agentName}-${routeStep.srcName}-${routeStep.dstName}`,
                    };
                });

                return {
                    agentName,
                    nodes,
                    links
                };
            });

            setSolutionGraphs(solutionsGraphs);
        }
    }, [solutions, tokenMetadata]);

    useEffect(() => {
        if (!solutionGraphs) return;

        const container = d3.select(renderContainerRef.current);
        container.select("svg").remove(); // Remove existing SVG to avoid duplicates

        let nodes = Array.from(new Set(solutionGraphs.map(graph => graph.nodes).flat()));
        let links = solutionGraphs.map(graph => graph.links).flat();

        let { width, height } = container.node().getBoundingClientRect();

        // Define the width and height for the SVG's viewBox
        let viewBoxWidth = width *2;
        let viewBoxHeight = height *2;

        if (solutions.length <= 1) {
            viewBoxWidth = Math.floor(viewBoxWidth / 2);
            viewBoxHeight = Math.floor(viewBoxHeight / 2);
        }

        const centerX = viewBoxWidth / 2;
        const centerY = viewBoxHeight / 2;

        const simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).id(d => d.id).distance(160))
            .force("charge", d3.forceManyBody().strength(-2000))
            .force("center", d3.forceCenter(centerX, centerY))
            .force("gravity", d3.forceRadial(0.5, centerX, centerY))
            .alphaDecay(0)
            .on("tick", tick);

        if (solutionGraphs.length > 1) {
            simulation.force("tangential", tangentialForce(2, centerX, centerY));
        }

        // Periodically reset alpha to maintain stability
        d3.interval(() => {
            simulation.alpha(0.3).restart();
        }, 1000);

        const svg = container.append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", `0 0 ${viewBoxWidth} ${viewBoxHeight}`)
            .attr("preserveAspectRatio", "none")
            .style("background-color", "transparent");

        const g = svg.append("g");

        // Build the arrow
        g.append("defs").selectAll("marker")
            .data(["end"])
            .enter().append("marker")
            .attr("id", String)
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 10)
            .attr("refY", 0)
            .attr("markerWidth", 6)
            .attr("markerHeight", 6)
            .attr("orient", "auto")
            .append("path")
            .attr("d", "M0,-5L10,0L0,5")
            .attr("fill", "white");

        // Add the links and the arrows
        const path = g.append("g").selectAll("path")
            .data(links)
            .enter().append("path")
            .attr("class", "link")
            .attr("marker-end", "url(#end)")
            .style("stroke", "white");

        // Add the link labels
        const linkLabels = g.append("g").selectAll(".link-label")
            .data(links)
            .enter().append("text")
            .attr("class", "link-label")
            .attr("dy", ".35em")
            .style("fill", "white")
            .style("text-anchor", "middle")
            .text(d => d.value);

        // Define the nodes
        const node = g.selectAll(".node")
            .data(nodes)
            .enter().append("g")
            .attr("class", "node")
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        // Add the circle icons with images for the nodes
        node.append("image")
            .attr("xlink:href", d => d.imageUrl)
            .attr("x", -15)
            .attr("y", -15)
            .attr("width", 30)
            .attr("height", 30);

        let hullPath = g.selectAll(".hull");

        function tick() {
            node.attr("transform", d => `translate(${d.x},${d.y})`);

            path.attr("d", d => {
                const lineOffset = 25;
                const totalLength = Math.sqrt(Math.pow(d.target.x - d.source.x, 2) + Math.pow(d.target.y - d.source.y, 2));
                const reductionRatio = lineOffset / totalLength;

                const sourceX = d.source.x + (d.target.x - d.source.x) * reductionRatio;
                const sourceY = d.source.y + (d.target.y - d.source.y) * reductionRatio;
                const targetX = d.target.x - (d.target.x - d.source.x) * reductionRatio;
                const targetY = d.target.y - (d.target.y - d.source.y) * reductionRatio;

                const delta = calculatePerpendicularOffset(d, 4);
                return `M${sourceX + delta.dx},${sourceY + delta.dy}L${targetX + delta.dx},${targetY + delta.dy}`;
            });

            linkLabels
                .attr("x", d => {
                    const offset = 20;
                    const delta = calculatePerpendicularOffset(d, offset);
                    return (d.source.x + d.target.x) / 2 + delta.dx;
                })
                .attr("y", d => {
                    const offset = 20;
                    const delta = calculatePerpendicularOffset(d, offset);
                    return (d.source.y + d.target.y) / 2 + delta.dy;
                })
                .attr("transform", d => {
                    const angle = Math.atan2(d.target.y - d.source.y, d.target.x - d.source.x) * 180 / Math.PI;
                    const x = (d.source.x + d.target.x) / 2 + calculatePerpendicularOffset(d, 10).dx;
                    const y = (d.source.y + d.target.y) / 2 + calculatePerpendicularOffset(d, 10).dy;
                    return `rotate(${(angle > 90 || angle < -90) ? angle + 180 : angle},${x},${y})`;
                });

            // Update hulls for solution click / selection detection
            if (solutionGraphs.length > 1) {
                const hulls = d3.groups(nodes, d => d.agentName).map(([agentName, nodes]) => {
                    const points = nodes.map(node => [node.x, node.y]);
                    const hull = d3.polygonHull(points);
                    return { agentName, hull };
                });

                hullPath = hullPath.data(hulls)
                    .join("path")
                    .attr("class", "hull")
                    .attr("d", d => d.hull ? d3.line()(d.hull) : null)
                    .attr("fill", "transparent")
                    .on("click", function (event, hull) {
                        const clickedSolution = hull.agentName;
                        onSolutionSelected(clickedSolution);
                    });
            }

            // Update P2P highlight divs
            // TODO dynamically add these instead of using static divs
            let divIndex = 0;
            links.forEach(link => {
                const sourceIsUser = link.source.name.includes("User");
                const targetIsUser = link.target.name.includes("User");
                if (sourceIsUser && targetIsUser && divIndex < pathDivRefs.current.length) {
                    const div = pathDivRefs.current[divIndex];
                    divIndex += 1;

                    const sourceNode = nodes.find(n => n.id === link.source.id);
                    const targetNode = nodes.find(n => n.id === link.target.id);

                    // Calculate the positions based on the viewBox
                    const x1 = sourceNode.x / viewBoxWidth * width;
                    const y1 = sourceNode.y / viewBoxHeight * height;
                    const x2 = targetNode.x / viewBoxWidth * width;
                    const y2 = targetNode.y / viewBoxHeight * height;

                    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
                    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

                    div.style.width = `${length}px`;
                    div.style.height = `10px`;
                    div.style.backgroundColor = `red`;
                    div.style.position = `absolute`;
                    div.style.top = `${y1}px`;
                    div.style.left = `${x1}px`;
                    div.style.transformOrigin = `0 0`;
                    div.style.transform = `rotate(${angle}deg)`;
                    div.style.display = 'block';
                }
            });

            // Hide unused divs
            for (let i = divIndex; i < pathDivRefs.current.length; i++) {
                pathDivRefs.current[i].style.display = 'none';
            }
        }

        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        function tangentialForce(strength, cx, cy) {
            return function () {
                nodes.forEach(d => {
                    const dx = d.x - cx;
                    const dy = d.y - cy;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance === 0) return;
                    const forceX = -dy / distance * strength;
                    const forceY = dx / distance * strength;
                    d.vx += forceX;
                    d.vy += forceY;
                });
            };
        }

        // Un-tangle the graph with a charge blast
        simulation.force("charge", d3.forceManyBody().strength(-9000));
        for (let i = 0; i < 500; ++i) simulation.tick();
        simulation.force("charge", d3.forceManyBody().strength(-2000));
        // for (let i = 0; i < 500; ++i) simulation tick();



        // TODO don't worry about resizing, pass in width and height as props
        // function resize() {
        //     const container = d3.select(renderContainerRef.current);
        //     ({ width, height } = container.node().getBoundingClientRect());
        //     [viewBoxWidth, viewBoxHeight] = [width*2, height*2]

        //     svg
        //     .attr("width", width)
        //     .attr("height", height)
        //     .attr("viewBox", `0 0 ${viewBoxWidth} ${viewBoxHeight}`);
        // }
        // window.addEventListener("resize", resize);
        // resize();
        // return () => {
        //     window.removeEventListener("resize", resize);
        // };

    }, [solutionGraphs]);

    const calculatePerpendicularOffset = (d, offset) => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        const perpendicularX = -dy / length * offset;
        const perpendicularY = dx / length * offset;
        return {
            dx: perpendicularX,
            dy: perpendicularY
        };
    };

    return (
        <div ref={renderContainerRef} className="w-full h-[400px] md:h-[700px] relative">
            {Array.from({ length: 10 }).map((_, i) => (
                <div
                    key={i}
                    ref={el => pathDivRefs.current[i] = el}
                    style={{ position: 'absolute', display: 'none', pointerEvents: 'none' }}
                />
            ))}
        </div>
    );
}
