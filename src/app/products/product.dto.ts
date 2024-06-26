// ¡¡¡¡BUENA PRACTICA!!!! QUE CADA DTO TENGA SU PROPIO ARCHIVO.
/**************************************************************/
import { Product } from './product.model';

//Ej. Omit con Type
//Crea un clon de producto pero sin los campos que se indican -> id, createDate, category y updateDate, se omiten.
// type CreateProductDto = Omit<Product, 'id'|'createDate'|'updateDate'|'category'>;

//Creo la interfaz extendida de PRoducto, omito los mismos campos y adiciono el categoryId ya que al momento de crear un producto solo es necesario el ID de la categoria que se va a asociar
export interface CreateProductDto
  extends Omit<Product, 'id' | 'createDate' | 'updateDate' | 'category'> {
  categoryId: string;
}

//En este caso en vez de omitir campos, indico que campos quiero incluir. Y crea un nuevo tipo con los datos seleccionados.
type example = Pick<Product, 'color' | 'description'>;

//Defino todos los campos como opcionales para solo actualizar los campos necesarios o que han sufrido cambios.
// type UpdateProductDto = Partial<Product>
export interface UpdateProductDto extends Partial<CreateProductDto> {}

// type example2 = Required<Product>;

//Readonly .... permite reasignar pero no acceder a métodos de mutación en el caso de los arrays
//omito tags y asigno nuevo tipado de array de strings a ReadonlyArray de strings
export interface findProductsDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  //Reasignando tipo ... con este ya no permitirá ni reasignar ni mutar un array.
  tags:ReadonlyArray<string>;
}

type example3 = Readonly<Product>; 
