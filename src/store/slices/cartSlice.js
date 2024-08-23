import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
  // State ==> represent intial data
    reducers: {
        addItem: (state, action) => {
            console.log("addItem State", state);
            console.log("addItem action", action);
            state.push(action.payload)
        },
        removeItem: (state, action) => {
            return state.filter((item) => item.productId !== action.payload);
        },
    },
});

export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;