import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  searchMovie: []
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      const moviesWithIds = action.payload.map((movie) => ({
        ...movie,
        id: nanoid(),
      }));
      state.movies = moviesWithIds;
      console.log("array with ID's: ", state.movies);
    },
    searchMovie: (state,action) => {
      state.searchMovie = action.payload
      console.log(searchMovie);
    }
  },
});

export const { addMovies , searchMovie} = movieSlice.actions;
export default movieSlice.reducer;
