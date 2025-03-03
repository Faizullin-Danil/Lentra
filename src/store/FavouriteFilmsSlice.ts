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
        setFavouriteFilteredFilms: (state, action) => {
            state.value = action.payload
            state.allFilms = action.payload
        },
        setFavouriteFilmsCountry: (state, action) => {
            state.value = state.allFilms.filter(film => 
                film.countries.some(country => country.name === action.payload)
            );
        },
        setFavouriteFilmsGenres: (state, action) => {
            state.value = state.allFilms.filter(film => 
                film.genres.some(genre => genre.name === action.payload)
            );
        },
        setFavouriteFilmsYears: (state, action) => {
            state.value = state.allFilms.filter(film => (film.year >= action.payload.from) && (film.year <= action.payload.to)
            );
        },
        setFavouriteFilmsClearFilter: (state) => {
            state.value.length = 0
        }
    }
})

export const { addFavouriteFilm, deleteFavouriteFilm } = FavouritesFilmsSlice.actions;
export default FavouritesFilmsSlice