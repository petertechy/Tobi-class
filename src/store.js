import { configureStore } from "@reduxjs/toolkit";
import  counterSlice from "./redux/counterSlice";
import productSlice  from "./redux/productSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    product: productSlice
  },
});

// Save Redux state to localStorage on every change
store.subscribe(() => {
  const state = store.getState().counter;
  localStorage.setItem("counterState", JSON.stringify(state));
});

export default store;