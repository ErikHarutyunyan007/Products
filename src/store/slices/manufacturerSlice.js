import { createSlice } from '@reduxjs/toolkit';

import { convertArrayToObject } from '../../utils/convertArrayToObject';
import { initialManufacturers } from '../../constants/initialManufacturers';

const initialState = convertArrayToObject(initialManufacturers, 'id');

export const manufacturerSlice = createSlice({
  name: 'manufacturers',
  initialState,
  reducers: {},
});

export const { name } = manufacturerSlice;

export default manufacturerSlice.reducer;
