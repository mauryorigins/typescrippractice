// ---Components
import { Card, upgrade } from '../../index';
// ---Main Function
/** Funcion para borrar primer elemento del listado */
export default function deleteFirst(yugiCards:Card[]) {
  let delCards:Card[] = [];
  for (let i = 0; i < yugiCards.length; i++) {
    const delCard = yugiCards[i]; // elemento actual de la iteracion
    if (i !== 0) {
      delCards = [...delCards, delCard];
    }
  }
  upgrade(delCards);
}
