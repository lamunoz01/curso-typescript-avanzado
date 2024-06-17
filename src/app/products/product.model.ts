import { Category } from '../categories/category.model';
import { BaseModel } from '../base.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';

//Herea la estructura del Base model y agrega los campos particulares de Product
export interface Product extends BaseModel {
  title: string;
  stock: number;
  size?: Sizes;
  category: Category;
}
