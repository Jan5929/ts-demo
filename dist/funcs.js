"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printDeck = exports.createDeck = void 0;
const enums_1 = require("./enums");
function createDeck() {
    const myDeck = [];
    const colorS = Object.values(enums_1.Color);
    const markS = Object.values(enums_1.Mark);
    for (const m of markS) {
        for (const c of colorS) {
            myDeck.push({
                color: c,
                mark: m
            });
        }
    }
    // for (let i = 0; i < markS.length; i++) {
    //   for (let j = 0; j < colorS.length; j++) {
    //     myDeck.push({
    //       color: colorS[j],
    //       mark: markS[i]
    //     })
    //   }
    // }
    return myDeck;
}
exports.createDeck = createDeck;
function printDeck(deck) {
    let result = '';
    deck.forEach((card, i) => {
        const str = card.color + card.mark;
        result += str + '\t';
        if ((i + 1) % 4 === 0) {
            result += '\n';
        }
    });
    console.log(result);
}
exports.printDeck = printDeck;
