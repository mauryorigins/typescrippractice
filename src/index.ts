// ---Components
import add from './Components/Add/add';
import print from './Components/Print/print';
import {
  infoCard1, infoCard2, infoCard3
} from '../others/DataCards';
// import search from './Components/Searching/Search';
// import modify from './Components/Searching/Modify';
import deleteFirst from './Components/Delete/deleteFirst';
// import deleteLast from './Components/Delete/DeleteLast';
// ---Interface
export interface Card {
  name:string,
  attribute:string,
  monsterTypeCard:string,
  type:string
  expantion:number,
  rarity:string,
  level:number,
  attack:number,
  defence:number,
  description:string
}

// ---const
let yugiCards:Card[] = [];
// ---Mehotds
export function upgrade(newYugiCards:Card[]) {
  yugiCards = newYugiCards;
}
// ---Main function
function main() {
  console.log('---------- Cool Programing ----------\n');
  print(yugiCards);
  add(yugiCards, infoCard1);
  add(yugiCards, infoCard2);
  add(yugiCards, infoCard3);
  deleteFirst(yugiCards);
  // deleteLast(yugiCards);
  // modify(yugiCards, 'Frightfur Kraken', infoCard4);
  print(yugiCards);
  console.log('--------------------------------------\n');
}

main();
/* nombres de las funciones en minusculas por convencion de poo
 y no generar confuniones con programadores de poo
 */
