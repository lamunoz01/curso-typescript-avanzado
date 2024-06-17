//Array NORMAL
const prices: (number | string)[] = ['abc',1,3,54,2]; //Este tipado - No tiene limite de elementos y no importa la posición en la que se ingrese cada elemento.
prices.push(1);
prices.push('123');

//Tuples
let user: [string,number, boolean]; // Es estricto el orden de ingreso de los elementos y la cantidad de estos ya que se define un tamaño limitado del array. 
//Llamados correctos
user = ['lbahumada',28, true];
// user = ['15',28,false];

//Llamados incorrectos
// user = [];
// user = ['Laura'];
// user = ['lbahumada',28, 08];
// user = [28, 'lbahumada'];

//Destructuración tuples
const [username,age]=user; //Aquí solo recupera los elementos que me importan y los demás los ignora.
console.log(username);
console.log(age);