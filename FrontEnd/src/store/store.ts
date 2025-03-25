import { configureStore } from "@reduxjs/toolkit";
import { FilmsSlice } from "./FilmsSlice";
import { FavouritesFilmsSlice } from "./FavouriteFilmsSlice";
import { AlertSlice } from "./AlertSlice";

export const store = configureStore({
  reducer: {
    films: FilmsSlice.reducer,
    favouritesFilms: FavouritesFilmsSlice.reducer,
    alert: AlertSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store
