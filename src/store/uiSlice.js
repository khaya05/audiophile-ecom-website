import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState: {
    showOverlay: false,
    showCart: false,
    showThanksCard: false,
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
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
