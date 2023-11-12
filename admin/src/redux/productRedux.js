import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAllProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getAllProductFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteAllProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((prod) => prod._id === action.payload),
        1
      );
    },

    deleteAllProductFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateAllProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((prod) => prod._id === action.payload.id)
      ] = action.payload.product;
    },

    updateAllProductFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //Add
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});
export const {
  getProductStart,
  getAllProductSuccess,
  getAllProductFailed,
  deleteProductStart,
  deleteAllProductSuccess,
  deleteAllProductFailed,
  updateProductStart,
  updateAllProductSuccess,
  updateAllProductFailed,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = productSlice.actions;
export default productSlice.reducer;
