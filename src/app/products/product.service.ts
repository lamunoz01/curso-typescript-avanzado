import { faker } from '@faker-js/faker';
import { Product } from './product.model';
import { CreateProductDto } from './product.dto';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.string.alphanumeric(6),
    createDate: faker.date.recent(),
    updateDate: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createDate: faker.date.recent(),
      updateDate: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
};
