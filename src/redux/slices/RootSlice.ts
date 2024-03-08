import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    brand: "Brand",
    flavor: "Flavor",
  },
  reducers: {
    chooseBrand: (state, action) => {
      state.brand = action.payload;
    },
    chooseFlavor: (state, action) => {
      state.flavor = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;
export const { chooseBrand, chooseFlavor } = rootSlice.actions;
