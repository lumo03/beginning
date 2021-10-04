import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './page';

export default configureStore({
  reducer: {
    page: pageReducer
  }
});
