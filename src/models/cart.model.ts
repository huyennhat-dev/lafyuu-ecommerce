import {ProductModel} from './product.model';

export interface CartItem {
  product: ProductModel;
  quantity: number;
  price: number; 
}

export interface CartModel {
  carts: CartItem[];
  totalPrice: number;
}
