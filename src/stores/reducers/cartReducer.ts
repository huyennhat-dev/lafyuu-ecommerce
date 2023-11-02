import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartItem, CartModel} from 'src/models/cart.model';

const initialState: CartModel = {carts: [], totalPrice: 0};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    increaseAmount: (state, action: PayloadAction<CartItem>) => {
      const existingCartItem = state.carts.find(
        item => item.product.id == action.payload.product.id,
      );
      if (existingCartItem) {
        existingCartItem.quantity += 1;

        let price = 0;

        for (const cart of state.carts) {
          price +=
            (cart.product.price! - cart.product.price! * cart.product.sale!) *
            cart.quantity;
        }
        state.totalPrice = price;
      }
    },
    decreaseAmount: (state, action: PayloadAction<CartItem>) => {
      const existingCartItem = state.carts.find(
        item => item.product.id == action.payload.product.id,
      );
      if (existingCartItem) {
        existingCartItem.quantity -= 1;
        if (existingCartItem.quantity <= 0) {
          state.carts = state.carts.filter(
            item => item.product.id !== action.payload.product.id,
          );
        }

        let price = 0;

        for (const cart of state.carts) {
          price +=
            (cart.product.price! - cart.product.price! * cart.product.sale!) *
            cart.quantity;
        }
        state.totalPrice = price;
      }
    },

    fetchCart: (state, action: PayloadAction<CartModel>) => {
      state.carts = action.payload.carts;
      state.totalPrice = action.payload.totalPrice;
    },
    addProductToCart: (state, action: PayloadAction<CartItem>) => {
      const existingCartItem = state.carts.find(
        item => item.product.id == action.payload.product.id,
      );

      if (existingCartItem) {
        existingCartItem.quantity += action.payload.quantity;

      } else {
        state.carts.push({
          product: action.payload.product,
          quantity: action.payload.quantity,
          price:
            (action.payload.product.price! -
              action.payload.product.price! * action.payload.product.sale!) *
            action.payload.quantity,
        });
      }
      let price = 0;

      for (const cart of state.carts) {
        price +=
          (cart.product.price! - cart.product.price! * cart.product.sale!) *
          cart.quantity;
      }
      state.totalPrice = price;
    },
    delProductFromCart: (state, action: PayloadAction<CartItem>) => {
      const updatedCarts = state.carts.filter(
        item => item.product.id !== action.payload.product.id,
      );
      state.carts = updatedCarts;

      let price = 0;

      for (const cart of state.carts) {
        price +=
          (cart.product.price! - cart.product.price! * cart.product.sale!) *
          cart.quantity;
      }
      state.totalPrice = price;
    },
  },
});

export const {increaseAmount, decreaseAmount, fetchCart, addProductToCart,delProductFromCart} =
  cartSlice.actions;
export default cartSlice.reducer;
