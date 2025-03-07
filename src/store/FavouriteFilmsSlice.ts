import { createSlice } from "@reduxjs/toolkit";
import { Film as FavouriteFilm } from "@/interfaces/Ifilm";


export const FavouritesFilmsSlice = createSlice({
    name: 'favouritesfilms',
    initialState: {
        value: [] as FavouriteFilm[],
        allFavouritesFilms: [] as FavouriteFilm[]
    },
    reducers: {
        addFavouriteFilm: (state, action) => {
            const newFilm = action.payload
            state.value = [...state.value, newFilm]
            state.allFavouritesFilms = [...state.allFavouritesFilms, newFilm]
        },
        deleteFavouriteFilm: (state, action) => {
            state.value = state.value.filter(favouriteFilm => favouriteFilm.id !== action.payload)
            state.allFavouritesFilms = state.allFavouritesFilms.filter(favouriteFilm => favouriteFilm.id !== action.payload)
        },
        setFavouriteCountry: (state, action) => {
            state.value = state.allFavouritesFilms.filter(film => 
                film.countries.some(country => 
                    country.name.includes(action.payload) || action.payload.includes(country.name)
                )
            );
        },
        setFavouriteGenres: (state, action) => {
            state.value = state.allFavouritesFilms.filter(film => 
                film.genres.some(genre => genre.name === action.payload)
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

export const { addFavouriteFilm, deleteFavouriteFilm, setFavouriteCountry, setFavouriteGenres, setFavouriteYears, setFavouriteClearFilter } = FavouritesFilmsSlice.actions;
export default FavouritesFilmsSlice