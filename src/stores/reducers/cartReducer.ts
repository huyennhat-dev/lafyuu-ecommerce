import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartItem, CartModel} from 'src/models/cart.model';

const initialState: CartModel = {carts: []};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    fetchCart: (state, action: PayloadAction<CartModel>) => {
      state.carts = action.payload.carts;
    },
    addProductToCart: (state, action: PayloadAction<CartItem>) => {
      const existingCartItem = state.carts.find(
        item => item.product.id === action.payload.product.id,
      );

      if (existingCartItem) {
        existingCartItem.quantity += action.payload.quantity;
      } else {
        state.carts.push({
          product: action.payload.product,
          quantity: action.payload.quantity,
        });
      }
    },
  },
});

export const {fetchCart, addProductToCart} = cartSlice.actions;
export default cartSlice.reducer;
