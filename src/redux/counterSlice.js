import { createSlice } from "@reduxjs/toolkit";

let savedState;
try {
  const data = localStorage.getItem("counterState");
  savedState = data ? JSON.parse(data) : null;
} catch (error) {
  savedState = null;
}

const initialState = savedState || {
  count: 0,
  allStudents: [],
  allProducts: []
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    increaseByNumber: (state, action) => {
      state.count += action.payload;
    },
    saveStudent: (state, action) => {
      state.allStudents.push(action.payload);
    },
  },
});

export const { increment, decrement, increaseByNumber, saveStudent } =
  counterSlice.actions;

export default counterSlice.reducer;