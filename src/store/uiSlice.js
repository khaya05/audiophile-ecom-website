import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState: {
    showOverlay: false,
    showCart: false,
    showThanksCard: false,
    expandCartItems:false
  },
  reducers: {
    toggleModal(state) {
      state.showOverlay = !state.showOverlay;
    },

    toggleCart(state) {
      state.showCart = !state.showCart;
    },

    toggleThanksCard(state) {
      state.showThanksCard = !state.showThanksCard;
    },

    toggleExpandCartItems(state) {
      state.expandCartItems = !state.expandCartItems;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
