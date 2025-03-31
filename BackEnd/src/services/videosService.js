const axios = require('axios');
const videoRepository = require('../repositories/videosRepository');
require('dotenv').config();

const API_KEY = process.env.API_KEY;


exports.getVideosByMovieFromAPI = async () => {
    const movies = await videoRepository.getAllMovies();

    if (!movies) {
        throw new Error("Не удалось получить список фильмов");
    }

    for (const movie of movies) {
        try {
            const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movie.kinopoisk_id}/videos`, {
                headers: {
                    'X-API-KEY': API_KEY
                }
            });
            // console.log("видео: ", response.data.items);

            await videoRepository.saveVideos(movie.kinopoisk_id, response.data.items)

        } catch (error) {
            console.error(`Ошибка при получении видео для фильма ${movie.kinopoisk_id}:`, error.message);
        }
    }

    return 'Видео успешно добавлены в базу данных';
};
