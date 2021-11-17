// ---Types
import { Card, upgrade } from '../../index';

// ---Main Function
/** funcion para agregar */
export default function add(yugiCards:Card[], infoyugi:Card) {
  const newAdd:Card[] = [...yugiCards, infoyugi]; // spread operator operacion dispersar
  // const yugi = [0,1,2,3]
  // const infoyugi = 4
  // const newyugi = [...[0,1,2,3],4]
  upgrade(newAdd);
}
