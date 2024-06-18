import { addProduct, products } from './products/product.service';
import { Faker, faker } from '@faker-js/faker';

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements([]),
    title: faker.commerce.productName(),
    stock: faker.number.int({ min: 10, max: 100 }),
    categoryId: faker.string.alphanumeric(2),
  });
}

console.log(products);
