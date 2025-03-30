const axios = require('axios');
const videoRepository = require('../repositories/videosRepository');
const pool = require('../config/db');
require('dotenv').config();

exports.getVideosByMovieFromAPI = async () => {
    const movies = await videoRepository.getMovies();

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
            console.log(response.data.items);
        } catch (error) {
            console.error(`Ошибка при получении видео для фильма ${movie.kinopoisk_id}:`, error.message);
        }
    }

    return 'Видео успешно получены';
};

exports.getAboutMovieFromAPI = async (kinopoisk_id) => {
    try {
        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${kinopoisk_id}`, {
            headers: {
                'X-API-KEY': API_KEY
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Ошибка при запросе информации о фильме');
    }
};

exports.getAllMovies = async () => {
    // Получаем все фильмы из базы данных
    return await videoRepository.getAllMovies();
};
