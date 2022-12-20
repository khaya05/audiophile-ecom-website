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
      const some = state.cartItems.some((product) => product.id === item.id);

      if (!some) {
        state.cartItems.push(item);
      } else {
        console.log('second case');
        state.cartItems.map((currentItem) => {
          if (currentItem.id === item.id) {
            currentItem.quantity = currentItem.quantity + item.quantity;
          }
        });
      }
      state.count = 1;
    },

    increaseQuantity(state) {
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
