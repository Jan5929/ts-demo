enum Color {
  red = '♥',
  fangK = '♦️',
  back = '♠️',
  meiH = '♣️'
}
enum Mark {
  one = 'A',
  two = '2',
  three = '3',
  four = '4',
  five = '5',
  six = '6',
  seven = '7',
  night = '8',
  nine = '9',
  ten = '10',
  eleven = 'J',
  twelve = 'Q',
  thirteen = 'K',
}
type Deck = NormalCard[]

type NormalCard = {
  color: Color,
  mark: Mark
}
const myDeck:Deck = []
function createDeck():Deck {
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
const deck = createDeck()

function printDeck(deck: Deck) {
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
printDeck(deck)