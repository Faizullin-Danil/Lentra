import { configureStore } from "@reduxjs/toolkit";
import { FilmsSlice } from "./FilmsSlice";
import { FavouritesFilmsSlice } from "./FavouriteFilmsSlice";


export const store = configureStore({
  reducer: {
    films: FilmsSlice.reducer,
    favouritesFilms: FavouritesFilmsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store
