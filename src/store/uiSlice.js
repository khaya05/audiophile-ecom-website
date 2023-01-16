import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState: {
    showOverlay: false,
    showCart: false,
    showThanksCard: false,
    expandCartItems: false,
    showMenu: false,
  },
  reducers: {
    openModal(state) {
      state.showOverlay = true;
    },

    closeModal(state) {
      state.showOverlay = false;
    },

    toggleModal(state) {
      state.showOverlay = !state.showOverlay;
    },

    openCart(state) {
      state.showCart = true;
    },

    closeCart(state) {
      state.showCart = false;
    },

    toggleCart(state) {
      state.showCart = !state.showCart;
    },

    toggleThanksCard(state) {
      state.showThanksCard = !state.showThanksCard;
    },

    closeThanksCard(state) {
      state.showThanksCard = false;
    },

    toggleExpandCartItems(state) {
      state.expandCartItems = !state.expandCartItems;
    },

    openMenu(state) {
      state.showMenu = true;
    },

    closeMenu(state) {
      state.showMenu = false;
    },

    toggleShowMenu(state) {
      state.showMenu = !state.showMenu;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
