import { faker } from '@faker-js/faker';
import { Product } from './product.model';
import {
  CreateProductDto,
  UpdateProductDto,
  findProductsDto,
} from './product.dto';

export const products: Product[] = [];

/*Servicio de Creación*/
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
    },
  };
  products.push(newProduct);
  return newProduct;
};

/*Servicio de actualización*/
export const updateProduct = (
  id: Product['id'],
  changes: UpdateProductDto
): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };
  return products[index];
  
};


/*Servicio de Búsqueda*/
export const findProducts = (dto: findProductsDto): Product[] => {
  //code ... Para conectar a db o motor de búsqueda
  // dto.tags=[]; //No permite esto(reasignar)
  //  dto.tags?.pop();//Peeerooo....Sí permite esto. (con el  cambio en el dto ya saca error con este)
  return products;
};
