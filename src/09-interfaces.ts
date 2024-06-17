type Sizes = 'S' | 'M' | 'L' | 'XL'; //Literal type
// type Product = {
//   id: string | number;
//   title: string;
//   createDate: Date;
//   stock: number;
//   size?: Sizes;
// };

//Puedo extender
interface Product {
  id: string | number;
  title: string;
  createDate: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'P1',
  createDate: new Date(),
  stock: 55,
});

//Interface puede usarse de la misma forma que un type.
const addProduct = (data: Product) => {
  products.push(data);
};
