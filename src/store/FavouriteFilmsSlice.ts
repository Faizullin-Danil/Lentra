import { createSlice } from "@reduxjs/toolkit";

interface FavouriteFilm {
    id: number;
    name: string;
    alternativeName: string;
    countries: Array<{ name: string }>;
    genres: Array<{ name: string }>;
    year: number;
}

export const FavouritesFilmsSlice = createSlice({
    name: 'favouritesfilms',
    initialState: {
        value: [] as FavouriteFilm[],
        allFilms: [] as FavouriteFilm[]
    },
    reducers: {
        addFavouriteFilm: (state, action) => {
            const newFilm = action.payload
            state.value = [...state.value, newFilm]
        },
        deleteFavouriteFilm: (state, action) => {
            state.value = state.value.filter(favouriteFilm => favouriteFilm.id !== action.payload)
        },
    }
})

export const { addFavouriteFilm, deleteFavouriteFilm } = FavouritesFilmsSlice.actions;
export default FavouritesFilmsSlice