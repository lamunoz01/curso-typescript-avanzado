//Tipa las constantes automaticamente como Never.
const withoutEnd = () => {
  while (true) {
    console.log('Estas en un Bucle infinito');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Es un String';
  } else if (Array.isArray(input)) {
    return 'Es un array';
  }
  return fail('No Match');
};

console.log(example('Holaaaa'));
console.log(example([1,2,3,4]));
console.log(example(152400)); //Solo llegara hasta aquí ya que aquí en el fallo se detiene el programa
console.log(example('Hola despues de fallar')); //Nunca va a llegar a esta linea

//Never es diferente de void - Void no tiene retorno / Never no se termina de ejecutar