import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceWishList(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItemToWish(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          title: newItem.title,
          image: newItem.image,
          category: newItem.category,
          original: newItem.original,
        });
        state.changed = true;
      } else {
        return;
      }
    },
    removeItemFromWish(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
            state.totalQuantity--;
                    state.changed = true;
    },
  },
});

export const wishListActions = wishListSlice.actions;

export default wishListSlice;
