import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../reducer/movieSlice";
import likedMoviesReducer from '../reducer/likedMovies'

const store = configureStore({
  reducer: {
    movies: movieReducer,
    likedMovies : likedMoviesReducer
  },
});

export default store