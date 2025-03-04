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
            state.allFilms = [...state.allFilms, newFilm]
        },
        deleteFavouriteFilm: (state, action) => {
            state.value = state.value.filter(favouriteFilm => favouriteFilm.id !== action.payload)
            state.allFilms = state.allFilms.filter(favouriteFilm => favouriteFilm.id !== action.payload)
        },
        setFavouriteCountry: (state, action) => {
            state.value = state.allFilms.filter(film => 
                film.countries.some(country => 
                    country.name.includes(action.payload) || action.payload.includes(country.name)
                )
            );
        },
        setFavouriteGenres: (state, action) => {
            state.value = state.allFilms.filter(film => 
                film.genres.some(genre => genre.name === action.payload)
            );
        },
        setFavouriteYears: (state, action) => {
            state.value = state.allFilms.filter(film => (film.year >= action.payload.from) && (film.year <= action.payload.to)
            );
        },
        setFavouriteClearFilter: (state) => {
            state.value = state.allFilms
        }
    }
})

export const { addFavouriteFilm, deleteFavouriteFilm, setFavouriteCountry, setFavouriteGenres, setFavouriteYears, setFavouriteClearFilter } = FavouritesFilmsSlice.actions;
export default FavouritesFilmsSlice