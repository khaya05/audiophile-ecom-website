import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState: {
    showOverlay: false,
    showCart: false,
  },
  reducers: {
    toggleModal(state) {
      state.showOverlay = !state.showOverlay;
    },

    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
