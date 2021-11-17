// ---Components
import { Card, upgrade } from '../../index';
// ---Main Function
/** Funcion para borrar el ultimo elemento del listado */
export default function deleteLast(yugiCards:Card[]) {
  let delCards:Card[] = [];
  for (let i = 0; i < yugiCards.length - 1; i++) {
    const delCard = yugiCards[i];
    delCards = [...delCards, delCard];
  }
  upgrade(delCards);
}
