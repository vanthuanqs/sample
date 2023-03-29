/* reference: https://redux-toolkit.js.org/tutorials/typescript */

import { configureStore } from '@reduxjs/toolkit'
import productReducer from './pages/products/productsSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
