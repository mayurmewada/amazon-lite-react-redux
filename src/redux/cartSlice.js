import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalAmount: 0,
  },
  reducers: {
    productAddToCart: (state, { payload }) => {
      console.log(payload);
      const isAvailable = state.cart.filter(
        (item) => item.productId === payload.productId
      ).length;

      if (isAvailable > 0) {
        const index = state.cart.findIndex(
          (item) => item.productId === payload.productId
        );

        state.cart[index].quantity = state.cart[index].quantity + 1;
        state.cart[index].price = state.cart[index].price + payload.price;
      } else {
        state.cart.push({ ...payload, quantity: 1 });
      }
      console.log(current(state.cart));
      state.totalAmount = state.totalAmount + payload.price;
    },
    removeProductFromCart: (state, { payload }) => {
      const isAvailable = state.cart.filter(
        (item) => item.productId === payload.productId
      )[0];
      console.log('isAvailable',isAvailable);

      if (isAvailable.quantity > 1) {
        const index = state.cart.findIndex(
          (item) => item.productId === payload.productId
        );
        console.log("wertyp", payload);

        state.cart[index].quantity = state.cart[index].quantity - 1;
        state.cart[index].price = state.cart[index].price - payload.price;
      } else {
        const remaining = state.cart.filter(item => item.productId !== payload.productId);
        state.cart = remaining
      }
      state.totalAmount = state.totalAmount - payload.price;
    },
  },
});

export const { productAddToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
