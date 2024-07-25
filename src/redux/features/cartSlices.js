import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  carts: [],
};
// card Slice
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const ItemIndex = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );
      console.log(ItemIndex);
      if (ItemIndex >= 0) {
        state.carts[ItemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, temp];
      }
    },
    increment: (state, action) => {
      const item = state.carts.find((ele) => ele.id === action.payload);
      if (item && item.qnty > 0) {
        item.qnty += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.carts.find((ele) => ele.id === action.payload);
      if (item) {
        if (item.qnty > 1) {
          // فقط تقليل الكمية إذا كانت أكبر من 1
          item.qnty -= 1;
        } else {
          // يمكن أن تقوم بإزالة العنصر إذا كانت الكمية 1 أو أقل
          state.carts = state.carts.filter((ele) => ele.id !== action.payload);
        }
      }
    },

    //remove particaular items
    removeFromCart: (state, action) => {
      const data = state.carts.filter((ele) => ele.id !== action.payload);
      state.carts = data;
    },
    //remove total items
    removeTotal: (state) => {
      state.carts = [];
    },
  },
});
export const { addToCart, increment, decrement, removeFromCart, removeTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
