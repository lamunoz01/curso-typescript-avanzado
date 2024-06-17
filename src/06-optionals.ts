//Parámetros opcionales y nullish-coalescing

export const createProduct = (
    id: string | number,
    isNew?: boolean, //Los parámetros opcionales deben de ir al final
    stock?: number,
  ) => {
    return {
      id,
      stock: stock ?? 10, //Ademas de ser opcional, si no existe un valor se agrega uno por defecto. En este caso el 10.
      isNew: isNew ?? true //En este caso si envio false, tomara false como el valor asignado, solo toma en cuenta el null y undefined para poner un valor por defecto.
      //isNew: isNew || true // si envio false como valor, con este operador se va a tomar el valor de la derecha.
    }
  }
  
  // 0 === false
  // '' === false
  // false === false
  
  const p1 = createProduct(1, true, 12);
  console.log(p1);
  
  const p2 = createProduct(1);
  console.log(p2);
  
  const p3 = createProduct(1, false, 0);
  console.log(p3);