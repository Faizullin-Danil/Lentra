// import { createSlice } from "@reduxjs/toolkit";

// interface FilteredFilm {
//     id: number;
//     name: string;
//     alternativeName: string;
//     countries: Array<{ name: string }>;
//     genres: Array<{ name: string }>;
//     year: number;
// }

// export const FilteredFilmsSlice = createSlice({
//     name: 'filteredfilms',
//     initialState: {
//         value: [] as FilteredFilm[],
//         allFilms: [] as FilteredFilm[]
//     },
//     reducers: {
//     setFilteredFilms: (state, action) => {
//         state.value = action.payload
//         state.allFilms = action.payload
//     },
//     setCountry: (state, action) => {
//         state.value = state.allFilms.filter(film => 
//             film.countries.some(country => country.name === action.payload)
//         );
//     },
//     setGenres: (state, action) => {
//         state.value = state.allFilms.filter(film => 
//             film.genres.some(genre => genre.name === action.payload)
//         );
//     },
//     setYears: (state, action) => {
//         state.value = state.allFilms.filter(film => (film.year >= action.payload.from) && (film.year <= action.payload.to)
//         );
//     },
//     setClearFilter: (state) => {
//         state.value.length = 0
//     }
//     }
// })

// export const { setFilteredFilms, setCountry, setGenres, setYears, setClearFilter } = FilteredFilmsSlice.actions;
// export default FilteredFilmsSlice