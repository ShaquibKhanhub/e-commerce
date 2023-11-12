import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethod";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
  deleteAllProductFailed,
  deleteAllProductSuccess,
  deleteProductStart,
  getAllProductFailed,
  getAllProductSuccess,
  getProductStart,
  updateAllProductFailed,
  updateAllProductSuccess,
  updateProductStart,
} from "./productRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log(res);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    console.log(res);
    dispatch(getAllProductSuccess(res.data));
  } catch (err) {
    dispatch(getAllProductFailed());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
     const res = await userRequest.delete(`/products/${id}`);

    dispatch(deleteAllProductSuccess(res.data));
  } catch (err) {
    dispatch(deleteAllProductFailed());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    const res = await publicRequest.post(`/products/${id}`);
    dispatch(updateAllProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateAllProductFailed());
  }
};


export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};