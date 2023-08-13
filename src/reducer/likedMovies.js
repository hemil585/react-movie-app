import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  likedMovies: [],
};

export const addLikedMovies = createAction("likedMovies/addLikedMovies");
export const removeLikedMovies = createAction("likedMovies/removeLikedMovies");

const likedMovies = createReducer(initialState, (builder) => {
  builder
    .addCase(addLikedMovies, (state, action) => {
      state.likedMovies.push(action.payload);
    })
    .addCase(removeLikedMovies, (state, action) => {
      state.likedMovies = state.likedMovies.filter(
        (movie) => movie.id !== action.payload
      );
    });
});

export default likedMovies;
