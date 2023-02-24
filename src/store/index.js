import { configureStore } from '@reduxjs/toolkit';
import productReducer, { name as productName } from './slices/productSlice';
import manufacturerReducer, { name as manufacturerName } from './slices/manufacturerSlice';

export const store = configureStore({
  reducer: {
    [productName]: productReducer,
    [manufacturerName]: manufacturerReducer,
  },
});
