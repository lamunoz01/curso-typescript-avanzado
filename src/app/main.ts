import {
  addProduct,
  findProducts,
  products,
  updateProduct,
} from './products/product.service';
import { faker } from '@faker-js/faker';

for (let index = 0; index < 1; index++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements([]),
    stock: faker.number.int({ min: 10, max: 100 }),
    categoryId: faker.string.alphanumeric(2),
  });
}

// console.log('Listado de productos add:');
console.log(products);

const product = products[0];
// console.log('Listado de productos updt:');
// console.log(product);
updateProduct(product.id, {
  title: 'New title',
  stock: 80
});


findProducts({
  stock: 10,
  color: 'red',
  createDate: new Date()
});
