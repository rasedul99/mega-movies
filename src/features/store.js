import { configureStore } from "@reduxjs/toolkit";
import movieReducer, { movieSlice } from "./movies/movieSlice";
console.log(movieSlice);
export const store = configureStore({
  reducer: { movieReducer },
});
