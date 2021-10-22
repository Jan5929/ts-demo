import { Color, Mark } from "./enums"
import { Deck } from "./types"

export function createDeck(): Deck {
  const myDeck:Deck = []
  const colorS = Object.values(Color)
  const markS = Object.values(Mark)
  for (const m of markS) {
    for (const c of colorS) {
      myDeck.push({
        color: c,
        mark: m
      })
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
  return myDeck
}
export function printDeck(deck: Deck) {
  let result = ''
  deck.forEach((card, i) => {
    const str = card.color + card.mark
    result += str + '\t'
    if((i + 1) % 4 === 0) {
      result += '\n'
    }
  })
  console.log(result)
}