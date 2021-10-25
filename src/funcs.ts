import { Joker } from './types';
/*
 * @Author: your name
 * @Date: 2021-10-25 11:11:29
 * @LastEditTime: 2021-10-25 11:27:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-demo/src/funcs.ts
 */
import { Color, Mark } from "./enums"
import { Deck, NormalCard } from "./types"

export function createDeck(): Deck {
  const myDeck:Deck = []
  const colorS = Object.values(Color)
  const markS = Object.values(Mark)
  for (const m of markS) {
    for (const c of colorS) {
      const card: NormalCard = {
        color: c,
        mark: m,
        getString() {
          return this.color + this.mark
        }
      }
      myDeck.push(card)
    }
  }
  let joker: Joker = {
    type: 'small',
    getString() {
      return 'jo'
    }
  }
  myDeck.push(joker)
  joker = {
    type: 'big',
    getString() {
      return 'JO'
    }
  }
  myDeck.push(joker)
  return myDeck
}
export function printDeck(deck: Deck) {
  let result = ''
  deck.forEach((card, i) => {
    result +=  card.getString() + '\t'
    if((i + 1) % 4 === 0) {
      result += '\n'
    }
  })
  console.log(result)
}