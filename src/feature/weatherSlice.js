import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  dataCity: [],
  data: [],
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getCity: (state) => {
      state.isLoading = true;
    },
    getCitySuccess: (state, action) => {
      state.isLoading = false;
      state.dataCity = action.payload;
    },
    getData: (state) => {
      state.isLoading = true;
    },
    getDataSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
});

export const { getCity, getCitySuccess, getData, getDataSuccess } =
  weatherSlice.actions;

const weatherReducer = weatherSlice.reducer;

export default weatherReducer;
