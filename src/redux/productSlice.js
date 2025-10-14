import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState:{
        allProducts: [],
    },
    reducers:{

    }
})

export const {} = productSlice.actions;
export default productSlice.reducer;