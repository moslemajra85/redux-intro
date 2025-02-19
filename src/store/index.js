// import { configureStore, createSlice } from '@reduxjs/toolkit';

import { configureStore, createSlice } from '@reduxjs/toolkit';

// create Songs Slice
const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    // the state that is used by this reducer
    // is the state that belongs to the songs slice
    addSong(state, action) {
      state.push(action.payload);
    },

    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },

    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

// cnfigure the store
const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

export { store };

// get the actions creators
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
