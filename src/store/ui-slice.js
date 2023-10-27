import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    languagesIsVisible: false,
    currenciesIsVisible: false,
    dropMenuIsVisible: false,
    searchIsVisible: false,
    cartIsVisible: false,
    wishListIsVisible: false,
    search:"",
  },
  reducers: {
    searchHandler(state, action) {
      state.search = action.payload;
    },
    langShowToggle(state) {
      state.languagesIsVisible = !state.languagesIsVisible;
    },
    currShowToggle(state) {
      state.currenciesIsVisible = !state.currenciesIsVisible;
    },
    dropMenuToggle(state) {
      state.dropMenuIsVisible = !state.dropMenuIsVisible;
    },
    searchToggle(state) {
      state.searchIsVisible = !state.searchIsVisible;
    },
    cartToggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    wishListToggle(state) {
      state.wishListIsVisible = !state.wishListIsVisible;
    },
    searchCloser(state) {
      state.searchIsVisible = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
