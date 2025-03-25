import axios from 'axios'
import { setFilms } from "../store/FilmsSlice";
import { setFavouritesFilms } from "../store/FavouriteFilmsSlice";

export const fetchFilms = async (dispatch) => {  // Получаем dispatch как параметр
  try {
    const response = await axios.get('http://localhost:3000/api/movies');
    const films = response.data;

    if (films && Array.isArray(films)) {
      const filmsWithPersons = await Promise.all(films.map(async (film) => {
        try {
          const personsData = await fetchPersons(film.kinopoisk_id);
          return { ...film, persons: personsData || [] };
        } catch (error) {
          console.error(`Ошибка при получении персон для фильма с ID ${film.kinopoisk_id}:`, error);
          return { ...film, persons: [] };
        }
      }));

      dispatch(setFilms(filmsWithPersons));  // Теперь dispatch корректно вызывается
    } else {
      throw new Error("Данные фильмов не содержат массив 'items'");
    }
  } catch (error) {
    console.error("Ошибка при загрузке данных фильма:", error);
    throw error;
  }
};

export const fetchFavouritesFilms = async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/api/favouritemovie');
    const favouritesFilms = response.data;

    if (favouritesFilms && Array.isArray(favouritesFilms)) {
      const favouritesFilmsWithPersons = await Promise.all(favouritesFilms.map(async (favouriteFilm) => {
        try {
          const personsData = await fetchPersons(favouriteFilm.kinopoisk_id);
          return { ...favouriteFilm, persons: personsData || [] };
        } catch (error) {
          console.error(`Ошибка при получении персон для фильма с ID ${favouriteFilm.kinopoisk_id}:`, error);
          return { ...favouriteFilm, persons: [] };
        }
      }));

      dispatch(setFavouritesFilms(favouritesFilmsWithPersons));  // Теперь dispatch корректно вызывается
    } else {
      throw new Error("Данные фильмов не содержат массив 'items'");
    }
  } catch (error) {
    console.error("Ошибка при загрузке данных фильма:", error);
    throw error;
  }
}

export const fetchPersons = async (kinopoisk_id: number) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/movie/${kinopoisk_id}/persons`)
    return response.data;
  } catch (error) {
    console.error("Ошибка при загрузке данных персон:", error);
    throw error;
  }
};

export const deleteFavouriteFilm = async (kinopoisk_id: number) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/favouritemovie/${kinopoisk_id}`)
  } catch (error) {
    console.error("Ошибка при удалении фильма из избранных:", error)
    throw error
  }
}

export const addFavouriteFilm = async (kinopoisk_id: number) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/favouritemovie/${kinopoisk_id}`)
  } catch (error) {
    console.error("Ошибка при добавдении фильма в избранные:", error)
    throw error
  }
}