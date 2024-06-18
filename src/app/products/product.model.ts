import { BaseModel } from '../base.model';
import { Category } from '../categories/category.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';

//Hereda la estructura del Base model y agrega los campos particulares de Product
export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  category: Category; //Solo deberia enviarse el id no el sub objeto
  isNew: boolean;
  tags: string[];
}


