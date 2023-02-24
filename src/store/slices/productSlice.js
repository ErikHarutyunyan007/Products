import { createSlice } from '@reduxjs/toolkit';

import { initialProducts } from '../../constants/initialProducts';
import { convertArrayToObject } from '../../utils/convertArrayToObject';

const initialState = convertArrayToObject(initialProducts, 'id');

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateProducts: (state, { payload }) => {
      state[payload.id] = payload;
    },
    removeProduct: (state, { payload }) => {
      delete state[payload];
    },
  },
});

export const { updateProducts, removeProduct } = productSlice.actions;
export const { name } = productSlice;

export default productSlice.reducer;
