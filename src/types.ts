/*
 * @Author: your name
 * @Date: 2021-10-25 11:11:29
 * @LastEditTime: 2021-10-25 11:21:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-demo/src/types.ts
 */
import { Color, Mark } from "./enums"

export type Deck = Card[]

export interface Card {
  getString(): string
}
export interface NormalCard extends Card {
  color: Color,
  mark: Mark
}

export interface Joker extends Card {
  type: 'big' | 'small'
}