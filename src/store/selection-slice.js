import { createSlice } from "@reduxjs/toolkit";

const selectionSlice = createSlice({
  name: "selection",
  initialState: {
    language: "us",
    currency: "USD",
    changed: false,
  },
  reducers: {
    replaceSelection(state, action) {
      state.language = action.payload.language;
      state.currency = action.payload.currency;
    },
    countryLangPicker(state, action) {
      state.language = action.payload;
      state.changed = true;
    },
    countryCurrPicker(state, action) {
      state.currency = action.payload;
      state.changed = true;
    },
  },
});

export const selectionActions = selectionSlice.actions;

export default selectionSlice;
