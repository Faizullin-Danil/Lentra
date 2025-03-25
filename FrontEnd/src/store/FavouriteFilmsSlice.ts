import { createSlice } from "@reduxjs/toolkit";
import { Film as FavouriteFilm } from "@/interfaces/Ifilm";


export const FavouritesFilmsSlice = createSlice({
    name: 'favouritesfilms',
    initialState: {
        value: [] as FavouriteFilm[],
        allFavouritesFilms: [] as FavouriteFilm[]
    },
    reducers: {
        setFavouritesFilms: (state, action) => {
            state.value = action.payload;
            state.allFavouritesFilms = action.payload;
        },
        addFavouriteFilm: (state, action) => {
            const newFilm = action.payload
            state.value = [...state.value, newFilm]
            state.allFavouritesFilms = [...state.allFavouritesFilms, newFilm]
        },
        deleteFavouriteFilm: (state, action) => {
            state.value = state.value.filter(favouriteFilm => favouriteFilm.kinopoisk_id !== action.payload) // id на kinopoiskId
            state.allFavouritesFilms = state.allFavouritesFilms.filter(favouriteFilm => favouriteFilm.kinopoisk_id !== action.payload) // id на kinopoiskId
        },
        setFavouriteCountry: (state, action) => {
            state.value = state.allFavouritesFilms.filter(film => 
                film.countries.some(country => 
                    country.country.includes(action.payload) || action.payload.includes(country.name)
                )
            );
        },
        setFavouriteGenres: (state, action) => {
            state.value = state.allFavouritesFilms.filter(film => 
                film.genres.some(genre => genre.genre === action.payload)
            );
        },
        setFavouriteYears: (state, action) => {
            state.value = state.allFavouritesFilms.filter(film => (film.year >= action.payload.from) && (film.year <= action.payload.to)
            );
        },
        setFavouriteClearFilter: (state) => {
            state.value = state.allFavouritesFilms
        }
    }
})

export const { setFavouritesFilms, addFavouriteFilm, deleteFavouriteFilm, setFavouriteCountry, setFavouriteGenres, setFavouriteYears, setFavouriteClearFilter } = FavouritesFilmsSlice.actions;
export default FavouritesFilmsSlice