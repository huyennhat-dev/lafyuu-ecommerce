import {ProductModel} from './product.model';

export interface CartItem {
  product: ProductModel;
  quantity: number;
}

export interface CartModel {
  carts: CartItem[];
}
