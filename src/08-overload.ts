//Nico => [N,i,c,o] => string => string[]
//[N,i,c,o] => Nico => string[] => string
//La sobrecarga de funciones solo aplica con las funciones declarativas.
/********** La solución **********/
// Tipado de sobrecarga permitida en typeScript
export function parseStr(input: string): string[]; //Indica que si recibo un string devuelvo un array
export function parseStr(input: string[]): string; //Indica que si recibo un array devuelvo un string
export function parseStr(input: number): boolean;

/********** El Problema **********/
// export function parseStr(input: string | string[]) {
//   if (Array.isArray(input)) {
//     return input.join(''); //retorna string
//   } else {
//     return input.split(''); //retorna string[]
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); //retorna string
  } else if (typeof input === 'string') {
    return input.split(''); //retorna string[]
  } else if (typeof input === 'number') {
    return true; //retorna boolean
  }
}

const rtaArray = parseStr('Laura');
rtaArray.reverse(); //Ej. con sobrecarga Permite acceder a las funciones de cada tipo sin tener que hacer la validación tipado.
//Ej. sin sobrecarga
// if (Array.isArray(rtaArray)) {
//     rtaArray.reverse();
// }
console.log('rtaArray ', 'Laura=> ', rtaArray);

const rtaStr = parseStr(['L', 'a', 'u', 'r', 'a']);
console.log('rtaStr ', "['L', 'a', 'u', 'r', 'a'] =>", rtaStr);

const rtaBool = parseStr(12);
console.log(rtaBool);
