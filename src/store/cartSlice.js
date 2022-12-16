import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    cartItems: [],
  },

  reducers: {
    addItemToCart(state, action) {
      // if (!state.cartItems.includes(item)) {
      //   state.cartItems.push(item);
      // } else {
      //   // state.cartItems.map(item => )
      // }

      console.log('added to cart');
    },

    increaseQuantity() {},
    decreaseQuantity() {},
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
