import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    count: 1,
    cartItems: [],
    total: 0,
    shipping: 50,
    vat: 0,
    grandTotal: 0,
  },

  reducers: {
    addItemToCart(state, action) {
      const item = action.payload;
      const some = state.cartItems.some((product) => product.id === item.id);

      if (!some) {
        state.cartItems.push(item);
      } else {
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

    increaseQuantityInCart(state, action) {
      state.cartItems.map((item) => {
        return item.id === action.payload
          ? { ...item, quantity: item.quantity++ }
          : item;
      });
    },

    decreaseQuantityInCart(state, action) {
      const currentItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (currentItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item !== currentItem
        );
      } else {
        state.cartItems.map((item) => {
          return item.id === action.payload
            ? { ...item, quantity: item.quantity-- }
            : item;
        });
      }
    },

    removeAll(state) {
      state.cartItems = [];
    },

    getTotal(state) {
      state.total = state.cartItems.reduce(
        (total, currentVal) => total + currentVal.price * currentVal.quantity,
        0
      );
    },

    getGrandTotal(state) {
      state.grandTotal = state.total + state.shipping;
    },

    getVat(state) {
      state.vat = parseFloat(state.total * 0.15).toFixed(2);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
