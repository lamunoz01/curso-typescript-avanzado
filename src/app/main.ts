import { addProduct } from './products/product.service';

addProduct({
  id: '1',
  title: 'P1',
  createDate: new Date(),
  updateDate: new Date(),
  stock: 55,
  category: {
    id: '15',
    name: 'C1',
    createDate: new Date(),
    updateDate: new Date(),
  },
});
