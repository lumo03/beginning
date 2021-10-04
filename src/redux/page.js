import { createSlice, createAction } from "@reduxjs/toolkit";
import { createStore, combineReducers } from "redux";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    page: "home",
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;
