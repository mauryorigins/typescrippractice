// ---Components
import { Card, upgrade } from '../../index';

// ---Main Function
/** Funcion para modificar algun elemento del listado buscandolo por nombre */
export default function modify(yugiCards:Card[], id:string, newInfo:Card) {
  let modCard:Card[] = [];
  for (let i = 0; i < yugiCards.length; i++) {
    let mod:Card = yugiCards[i];
    if (id === yugiCards[i].name) {
      mod = newInfo;
    }
    modCard = [...modCard, mod];
  }
  upgrade(modCard);
}
