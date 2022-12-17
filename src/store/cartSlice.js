import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    count: 1,
    cartItems: [],
  },

  reducers: {
    addItemToCart(state, action) {
      const item = action.payload;

      if (!state.cartItems.includes(item)) {
        state.cartItems.push(item);
      } else {
        state.cartItems.map((currentItem) => {
          if (currentItem === item) {
            currentItem.quantity = item.quantity;
          }
        });
      }
      state.count = 1;

      console.log('added to cart', item);
    },

    increaseQuantity(state) {
      console.log('click');
      state.count++;
    },
    decreaseQuantity(state) {
      if (state.count === 1) {
        state.count = 1;
      } else {
        state.count--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
