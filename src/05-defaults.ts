//Parámetros por defecto al modo de typescript
export const createProduct = (
  id: string | number,
  isNew: boolean = true, //Se indica el valor por defecto que tendra en caso de no ser enviado el parámetro
  stock: number = 10
) => {
  return {
    id,
    stock,
    isNew,
  };
};

// 0 === false
// '' === false
// false === false

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(1);
console.log(p2);

const p3 = createProduct(1, false, 0);
console.log(p3);

const p4 = createProduct(4, true, 100);
console.log(p4);

const p5 = createProduct(5, false);
console.log(p5);
