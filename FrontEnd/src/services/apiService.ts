import axios from 'axios'

export const fetchPersons = async (kinopoisk_id: number) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/movie/${kinopoisk_id}/persons`)
    return response.data;
  } catch (error) {
    console.error("Ошибка при загрузке данных персон:", error);
    throw error;
  }
};
  
export const fetchFilms = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/movies');
    return response.data; 
  } catch (error) {
    console.error("Ошибка при загрузке данных фильма:", error);
    throw error;
  }
};

export const fetchFavouritesMovies = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/favouritemovie')
    return response.data
  } catch (error) {
    console.error("Ошибка при загрузке данных избранных фильмов:", error);
    throw error;
  }
}