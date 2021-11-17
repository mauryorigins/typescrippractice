// ---Types
import { Card } from '../../index';

// ---Main Function
/** Funcion que muestra el un elemento en consola buscandolo por expancion */
export default function search(yugiCards:Card[], id:number) {
  for (let i = 0; i < yugiCards.length; i++) {
    const searchid = yugiCards[i];
    if (id === yugiCards[i].expantion) {
      console.log(searchid);
    }
  }
}
