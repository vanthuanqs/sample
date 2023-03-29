/* reference: https://redux-toolkit.js.org/tutorials/typescript */

import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { ProductsListResult, getProducts } from '../../api/product-api';
import { Product } from '../../types';

interface ProductsState {
  products: Product[],
  isLoading: boolean
  error: string | null
}

const productsInitialState: ProductsState = {
  products: [],
  isLoading: false,
  error: null
}

function startLoading(state: ProductsState) {
  state.isLoading = true
}

function loadingFailed(state: ProductsState, action: PayloadAction<string>) {
  state.isLoading = false
  state.error = action.payload
}

const products = createSlice({
  name: 'products',
  initialState: productsInitialState,
  reducers: {
    getProductsStart: startLoading,
    getProductsSuccess(state, { payload }: PayloadAction<ProductsListResult>) {
      const {  products } = payload;
      state.isLoading = false;
      state.error = null;
      state.products = products;
    },
    getProductsFailure: loadingFailed
  }
})

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure
} = products.actions;

export const fetchProducts = () => async (dispatch: Dispatch) => {
  try {
    dispatch(getProductsStart())
    const products = await getProducts()
    dispatch(getProductsSuccess(products))
  } catch (err) {
    dispatch(getProductsFailure(`${err}`))
  }
}

export default products.reducer;
