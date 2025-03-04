import { createSlice } from "@reduxjs/toolkit";
import { Film } from "@/interfaces/Ifilm";

export const FilmsSlice = createSlice({
    name: 'films',
    initialState: {
        value: [] as Film[],
        allFilms: [] as Film[]
    },
    reducers: {
        setFilms: (state, action) => {
            state.value = action.payload
            state.allFilms = action.payload
        },
        setCountry: (state, action) => {
            state.value = state.allFilms.filter(film => 
                film.countries.some(country => 
                    country.name.includes(action.payload) || action.payload.includes(country.name)
                )
            );
        },        
        setGenres: (state, action) => {
            state.value = state.allFilms.filter(film => 
                film.genres.some(genre => genre.name === action.payload)
            );
        },
        setYears: (state, action) => {
            state.value = state.allFilms.filter(film => (film.year >= action.payload.from) && (film.year <= action.payload.to)
            );
        },
        setClearFilter: (state) => {
            state.value = state.allFilms
        }
    }
})

export const { setFilms } = FilmsSlice.actions;
export const { setCountry, setGenres, setYears, setClearFilter } = FilmsSlice.actions;

export default FilmsSlice