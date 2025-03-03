import { configureStore } from "@reduxjs/toolkit";
import { FilmsSlice } from "./FilmsSlice";
import { FavouritesFilmsSlice } from "./FavouriteFilmsSlice";
import { FilteredFilmsSlice } from "./FilteredFilmsSlice";


export const store = configureStore({
  reducer: {
    films: FilmsSlice.reducer,
    favouritesFilms: FavouritesFilmsSlice.reducer,
    filteredFilms: FilteredFilmsSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store
