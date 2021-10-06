import { createSlice, createAction } from "@reduxjs/toolkit";
import { createStore, combineReducers } from "redux";
import { pages } from '../data';

export const pageSlice = createSlice({
  name: "page",
  initialState: pages[0],
  reducers: {
    setPage: (state, action) => {
      state.name = action.payload;
      state.url = nameToURL(action.payload);
      state.title = nameToTitle(action.payload);
    },
  },
});

const nameToURL = (name = "default") => {
  return  "/" + name;
};

const nameToTitle = (name = "default") => {
  return name[0].toUpperCase() + name.slice(1);
};

export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;
