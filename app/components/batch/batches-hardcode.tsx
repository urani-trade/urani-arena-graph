



export const dataHard = [
    {
        name: "Solution 1",
        nodes: ["Harry", "Mario", "Sarah", "Alice", "Eveie", "Peter", "James", "Roger"],
        links: [
            { source: "Harry", destination: "Mario", value: "SOL" },
            { source: "Sarah", destination: "Alice", value: "SOL" },
            { source: "Eveie", destination: "Alice", value: "SOL" },
            { source: "Peter", destination: "Alice", value: "SOL" },
            { source: "Mario", destination: "Alice", value: "SOL" },
            { source: "James", destination: "Alice", value: "SOL" },
            { source: "Alice", destination: "Mario", value: "SOL" },
            { source: "Sarah", destination: "James", value: "SOL" },
            { source: "Roger", destination: "James", value: "SOL" },
            { source: "James", destination: "Roger", value: "SOL" },
            { source: "Alice", destination: "Peter", value: "SOL" },
            { source: "Alice", destination: "Eveie", value: "SOL" },
            { source: "Harry", destination: "Eveie", value: "SOL" },
            { source: "Eveie", destination: "Harry", value: "SOL" },
            { source: "James", destination: "Sarah", value: "SOL" },
            { source: "Alice", destination: "Sarah", value: "SOL" }
        ]
    },
    {
        name: "Solution 2",
        nodes: ["0xRekt", "0xBeef", "0xDead"],
        links: [
            { source: "0xRekt", destination: "0xBeef", value: "ETH" },
            { source: "0xBeef", destination: "0xRekt", value: "ETH" },
            { source: "0xBeef", destination: "0xDead", value: "ETH" },
            { source: "0xDead", destination: "0xRekt", value: "ETH" },
            { source: "0xRekt", destination: "0xBeef", value: "ETH" }
        ]
    },
    {
        name: "Solution 3",
        nodes: ["Jake", "Bob", "Charlie", "Dave"],
        links: [
            { source: "Jake", destination: "Bob", value: "BTC" },
            { source: "Bob", destination: "Charlie", value: "BTC" },
            { source: "Charlie", destination: "Dave", value: "BTC" },
            { source: "Dave", destination: "Jake", value: "BTC" }
        ]
    },
    {
        name: "Solution 4",
        nodes: ["X", "Y", "Z"],
        links: [
            { source: "X", destination: "Y", value: "LTC" },
            { source: "Y", destination: "Z", value: "LTC" },
            { source: "Z", destination: "X", value: "LTC" },
            { source: "X", destination: "Z", value: "LTC" }
        ]
    }
];

export const batchData = [
    {
        batchNumber: 21,
        batchTime: '2022-01-01 12:00:00',
        orders: [
            {
                id: '3123123',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDC',
                    amount: '100',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '400',
                }
            },
            {
                id: '5234234',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '400',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDC',
                    amount: '100',
                }
            }
        ],
        solutions: [
            {
                id: '5345345',
                agentName: 'Scully',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f676174657761792e697279732e78797a2f45537865704c707676536e3930674d716f4b2d4869346535557636442d58746348576256734e576a4e304d',
                route: [
                    {
                        venueName: 'Jupiter',
                        venueImage: 'https://statics.solscan.io/ex-img/JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB.svg'
                    },
                    {
                        venueName: 'Meteora',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Phoenix',
                        venueImage: 'https://statics.solscan.io/ex-img/PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY.svg'
                    },
                ],
                solutionScore: 95
            },
            {
                id: '666673',
                agentName: 'Mulder',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f63662d697066732e636f6d2f697066732f516d634d50316f35767045523156646d67593248756947444b63793151445a78774d7079736e436868455937746b',
                route: [
                    {
                        venueName: 'Meteora',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Raydium',
                        venueImage: 'https://statics.solscan.io/ex-img/CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK.png'
                    }
                ],
                solutionScore: 90
            }
        ]
    },
    {
        batchNumber: 22,
        batchTime: '2024-02-01 12:00:00',
        orders: [
            {
                id: '5223669867354',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDT',
                    amount: '300',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '800',
                }
            },
            {
                id: '5233453454234',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '800',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDT',
                    amount: '300',
                }
            },
            {
                id: '2346000456',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '500',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDT',
                    amount: '1200',
                }
            },
            {
                id: '111555',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDT',
                    amount: '1000',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '1500',
                }
            },
        ],
        solutions: [
            {
                id: '745456',
                agentName: 'Arbitrium',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f676174657761792e697279732e78797a2f45537865704c707676536e3930674d716f4b2d4869346535557636442d58746348576256734e576a4e304d',
                route: [
                    {
                        venueName: 'Jupiter',
                        venueImage: 'https://statics.solscan.io/ex-img/JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB.svg'
                    },
                    {
                        venueName: 'Meteora',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Phoenix',
                        venueImage: 'https://statics.solscan.io/ex-img/PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY.svg'
                    },
                ],
                solutionScore: 77
            },
            {
                id: '0456568',
                agentName: 'Aptos',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f63662d697066732e636f6d2f697066732f516d634d50316f35767045523156646d67593248756947444b63793151445a78774d7079736e436868455937746b',
                route: [
                    {
                        venueName: 'Meteora',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Raydium',
                        venueImage: 'https://statics.solscan.io/ex-img/CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK.png'
                    }
                ],
                solutionScore: 50
            },
            {
                id: '335354',
                agentName: 'Aptos 2.0',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f63662d697066732e636f6d2f697066732f516d634d50316f35767045523156646d67593248756947444b63793151445a78774d7079736e436868455937746b',
                route: [
                    {
                        venueName: 'Meteora 222',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Raydium 3333',
                        venueImage: 'https://statics.solscan.io/ex-img/CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK.png'
                    }
                ],
                solutionScore: 20
            }
        ]
    },
    {
        batchNumber: 23,
        batchTime: '2024-02-02 12:00:00',
        orders: [
            {
                id: '89000345',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDT',
                    amount: '1800',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '2800',
                }
            },
            {
                id: '23432342347777',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '2800',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDT',
                    amount: '1800',
                }
            },
            {
                id: '2242349899456',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDC',
                    amount: '1000',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'ARB',
                    amount: '900',
                }
            },
        ],
        solutions: [
            {
                id: '53444545345',
                agentName: 'Arbitrium 333',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f676174657761792e697279732e78797a2f45537865704c707676536e3930674d716f4b2d4869346535557636442d58746348576256734e576a4e304d',
                route: [
                    {
                        venueName: 'Jupiter',
                        venueImage: 'https://statics.solscan.io/ex-img/JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB.svg'
                    },
                    {
                        venueName: 'Meteora',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Phoenix',
                        venueImage: 'https://statics.solscan.io/ex-img/PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY.svg'
                    },
                ],
                solutionScore: 99
            },
            {
                id: '63459922',
                agentName: 'Aptos rrr',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f63662d697066732e636f6d2f697066732f516d634d50316f35767045523156646d67593248756947444b63793151445a78774d7079736e436868455937746b',
                route: [
                    {
                        venueName: 'Meteora',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Raydium',
                        venueImage: 'https://statics.solscan.io/ex-img/CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK.png'
                    }
                ],
                solutionScore: 17
            }
        ]
    },
    {
        batchNumber: 24,
        batchTime: '2022-01-01 12:00:00',
        orders: [
            {
                id: '44234',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDC',
                    amount: '100',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '400',
                }
            },
            {
                id: '6345345',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '400',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDC',
                    amount: '100',
                }
            }
        ],
        solutions: [
            {
                id: '53474564565345',
                agentName: 'Scully',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f676174657761792e697279732e78797a2f45537865704c707676536e3930674d716f4b2d4869346535557636442d58746348576256734e576a4e304d',
                route: [
                    {
                        venueName: 'Jupiter',
                        venueImage: 'https://statics.solscan.io/ex-img/JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB.svg'
                    },
                    {
                        venueName: 'Meteora',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Phoenix',
                        venueImage: 'https://statics.solscan.io/ex-img/PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY.svg'
                    },
                ],
                solutionScore: 95
            },
            {
                id: '534684565345',
                agentName: 'Mulder',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f63662d697066732e636f6d2f697066732f516d634d50316f35767045523156646d67593248756947444b63793151445a78774d7079736e436868455937746b',
                route: [
                    {
                        venueName: 'Meteora',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Raydium',
                        venueImage: 'https://statics.solscan.io/ex-img/CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK.png'
                    }
                ],
                solutionScore: 90
            }
        ]
    },
    {
        batchNumber: 25,
        batchTime: '2024-02-01 12:00:00',
        orders: [
            {
                id: '345345345',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDT',
                    amount: '300',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '800',
                }
            },
            {
                id: '53454567456',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '800',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDT',
                    amount: '300',
                }
            },
            {
                id: '5345376779',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '500',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDT',
                    amount: '1200',
                }
            },
            {
                id: '84557678',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDT',
                    amount: '1000',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '1500',
                }
            },
        ],
        solutions: [
            {
                id: '534785675345',
                agentName: 'Arbitrium',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f676174657761792e697279732e78797a2f45537865704c707676536e3930674d716f4b2d4869346535557636442d58746348576256734e576a4e304d',
                route: [
                    {
                        venueName: 'Jupiter',
                        venueImage: 'https://statics.solscan.io/ex-img/JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB.svg'
                    },
                    {
                        venueName: 'Meteora',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Phoenix',
                        venueImage: 'https://statics.solscan.io/ex-img/PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY.svg'
                    },
                ],
                solutionScore: 77
            },
            {
                id: '53468955345',
                agentName: 'Aptos',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f63662d697066732e636f6d2f697066732f516d634d50316f35767045523156646d67593248756947444b63793151445a78774d7079736e436868455937746b',
                route: [
                    {
                        venueName: 'Meteora',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Raydium',
                        venueImage: 'https://statics.solscan.io/ex-img/CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK.png'
                    }
                ],
                solutionScore: 50
            },
            {
                id: '53645745345',
                agentName: 'Aptos 2.0',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f63662d697066732e636f6d2f697066732f516d634d50316f35767045523156646d67593248756947444b63793151445a78774d7079736e436868455937746b',
                route: [
                    {
                        venueName: 'Meteora 222',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Raydium 3333',
                        venueImage: 'https://statics.solscan.io/ex-img/CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK.png'
                    }
                ],
                solutionScore: 20
            }
        ]
    },
    {
        batchNumber: 26,
        batchTime: '2024-02-02 12:00:00',
        orders: [
            {
                id: '99354545768522',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDT',
                    amount: '1800',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '2800',
                }
            },
            {
                id: '523433234',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '2800',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDT',
                    amount: '1800',
                }
            },
            {
                id: '77345345',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDC',
                    amount: '1000',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'ARB',
                    amount: '900',
                }
            },
        ],
        solutions: [
            {
                id: '5345773443455345',
                agentName: 'Arbitrium 333',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f676174657761792e697279732e78797a2f45537865704c707676536e3930674d716f4b2d4869346535557636442d58746348576256734e576a4e304d',
                route: [
                    {
                        venueName: 'Jupiter',
                        venueImage: 'https://statics.solscan.io/ex-img/JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB.svg'
                    },
                    {
                        venueName: 'Meteora',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Phoenix',
                        venueImage: 'https://statics.solscan.io/ex-img/PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY.svg'
                    },
                ],
                solutionScore: 99
            },
            {
                id: '5342225345',
                agentName: 'Aptos rrr',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f63662d697066732e636f6d2f697066732f516d634d50316f35767045523156646d67593248756947444b63793151445a78774d7079736e436868455937746b',
                route: [
                    {
                        venueName: 'Meteora',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Raydium',
                        venueImage: 'https://statics.solscan.io/ex-img/CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK.png'
                    }
                ],
                solutionScore: 17
            }
        ]
    },
    {
        batchNumber: 27,
        batchTime: '2022-01-01 12:00:00',
        orders: [
            {
                id: '7456456',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDC',
                    amount: '100',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '400',
                }
            },
            {
                id: '003454567213234342',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '400',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDC',
                    amount: '100',
                }
            }
        ],
        solutions: [
            {
                id: '53455563345',
                agentName: 'Scully',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f676174657761792e697279732e78797a2f45537865704c707676536e3930674d716f4b2d4869346535557636442d58746348576256734e576a4e304d',
                route: [
                    {
                        venueName: 'Jupiter',
                        venueImage: 'https://statics.solscan.io/ex-img/JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB.svg'
                    },
                    {
                        venueName: 'Meteora',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Phoenix',
                        venueImage: 'https://statics.solscan.io/ex-img/PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY.svg'
                    },
                ],
                solutionScore: 95
            },
            {
                id: '534532245',
                agentName: 'Mulder 1',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f63662d697066732e636f6d2f697066732f516d634d50316f35767045523156646d67593248756947444b63793151445a78774d7079736e436868455937746b',
                route: [
                    {
                        venueName: 'Meteora',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Raydium',
                        venueImage: 'https://statics.solscan.io/ex-img/CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK.png'
                    }
                ],
                solutionScore: 90
            }
        ]
    },
    {
        batchNumber: 28,
        batchTime: '2024-02-01 12:00:00',
        orders: [
            {
                id: '8456456',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDT',
                    amount: '300',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '800',
                }
            },
            {
                id: '8956567567',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '800',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDT',
                    amount: '300',
                }
            },
            {
                id: '245963422112436',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '500',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDT',
                    amount: '1200',
                }
            },
            {
                id: '5675689456',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDT',
                    amount: '1000',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '1500',
                }
            },
        ],
        solutions: [
            {
                id: '5555345345',
                agentName: 'Arbitrium',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f676174657761792e697279732e78797a2f45537865704c707676536e3930674d716f4b2d4869346535557636442d58746348576256734e576a4e304d',
                route: [
                    {
                        venueName: 'Jupiter',
                        venueImage: 'https://statics.solscan.io/ex-img/JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB.svg'
                    },
                    {
                        venueName: 'Meteora',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Phoenix',
                        venueImage: 'https://statics.solscan.io/ex-img/PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY.svg'
                    },
                ],
                solutionScore: 77
            },
            {
                id: '53111145345',
                agentName: 'Aptos',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f63662d697066732e636f6d2f697066732f516d634d50316f35767045523156646d67593248756947444b63793151445a78774d7079736e436868455937746b',
                route: [
                    {
                        venueName: 'Meteora',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Raydium',
                        venueImage: 'https://statics.solscan.io/ex-img/CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK.png'
                    }
                ],
                solutionScore: 50
            },
            {
                id: '53453499995',
                agentName: 'Aptos 2.0',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f63662d697066732e636f6d2f697066732f516d634d50316f35767045523156646d67593248756947444b63793151445a78774d7079736e436868455937746b',
                route: [
                    {
                        venueName: 'Meteora 222',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Raydium 3333',
                        venueImage: 'https://statics.solscan.io/ex-img/CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK.png'
                    }
                ],
                solutionScore: 20
            }
        ]
    },
    {
        batchNumber: 29,
        batchTime: '2024-02-02 12:00:00',
        orders: [
            {
                id: '8456456456',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDT',
                    amount: '1800',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '2800',
                }
            },
            {
                id: '34556867857',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'WIF',
                    amount: '2800',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDT',
                    amount: '1800',
                }
            },
            {
                id: '448992345346',
                srcToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f6c616e612d6c6162732f746f6b656e2d6c6973742f6d61696e2f6173736574732f6d61696e6e65742f45506a465764643541756671535371654d32714e31787a7962617043384734774547476b5a777954447431762f6c6f676f2e706e67',
                    name: 'USDC',
                    amount: '1000',
                },
                targetToken: {
                    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f6261666b726569626b33636f7673356c7479717861323732756f646863756c6272366b656136626574696466777933616a73617632766a7a79756d2e697066732e6e667473746f726167652e6c696e6b',
                    name: 'ARB',
                    amount: '900',
                }
            },
        ],
        solutions: [
            {
                id: '5348340005345',
                agentName: 'Arbitrium 333',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f676174657761792e697279732e78797a2f45537865704c707676536e3930674d716f4b2d4869346535557636442d58746348576256734e576a4e304d',
                route: [
                    {
                        venueName: 'Jupiter',
                        venueImage: 'https://statics.solscan.io/ex-img/JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB.svg'
                    },
                    {
                        venueName: 'Meteora',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Phoenix',
                        venueImage: 'https://statics.solscan.io/ex-img/PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY.svg'
                    },
                ],
                solutionScore: 99
            },
            {
                id: '53459440345',
                agentName: 'Aptos rrr',
                agentImage: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f63662d697066732e636f6d2f697066732f516d634d50316f35767045523156646d67593248756947444b63793151445a78774d7079736e436868455937746b',
                route: [
                    {
                        venueName: 'Meteora',
                        venueImage: 'https://statics.solscan.io/ex-img/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB.svg'
                    },
                    {
                        venueName: 'Raydium',
                        venueImage: 'https://statics.solscan.io/ex-img/CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK.png'
                    }
                ],
                solutionScore: 17
            }
        ]
    }

];
