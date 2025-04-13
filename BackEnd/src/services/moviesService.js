const axios = require('axios');
const movieRepository = require('../repositories/moviesRepository');
require('dotenv').config();

const API_URL_AllMovies = 'https://kinopoiskapiunofficial.tech/api/v2.2/films?type=FILM&page=3';
const API_KEY = process.env.API_KEY;

exports.fetchAndSaveMovies = async () => {
    try {
        console.log('Запрос к API Кинопоиска...');
        const response = await axios.get(API_URL_AllMovies, {
            headers: {
                'X-API-KEY': API_KEY,
            },
            params: {
                type: 'FILM',
                ratingFrom: 0,
                ratingTo: 10,
                yearFrom: 1000,
                yearTo: 3000,
                page: 1,
            }
        });

        const movies = response.data.items;
        for (const movie of movies) {
            const { kinopoiskId, imdbId, nameRu, nameOriginal, nameEn, countries, genres, posterUrl, posterUrlPreview, ratingImdb, ratingKinopoisk, type, year } = movie;

            const moreInfoAboutMovies = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${kinopoiskId}`, {
                headers: {
                    'X-API-KEY': API_KEY
                }
            });

            const { filmLength, description, ratingAgeLimits } = moreInfoAboutMovies.data;

            await movieRepository.saveMovie({
                imdbId,
                kinopoiskId,
                nameRu,
                nameOriginal,
                nameEn,
                countries,
                genres,
                posterUrl,
                posterUrlPreview,
                ratingImdb,
                ratingKinopoisk,
                type,
                year,
                filmLength,
                description,
                ratingAgeLimits
            });
        }

        return 'Movies successfully added to the database!';
    } catch (error) {
        console.error('Ошибка при запросе к API:', error.message);
        throw new Error('Failed to fetch or save movies');
    }
};

exports.getMovieDetailsFromAPI = async (kinopoisk_id) => {
    try {
        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${kinopoisk_id}`, {
            headers: {
                'X-API-KEY': API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка при запросе к API о фильме:', error.message);
        throw new Error('Failed to fetch movie details');
    }
};

exports.getAllMoviesFromDB = async () => {
    try {
        return await movieRepository.getAllMovies();
    } catch (error) {
        console.error('Ошибка при получении всех фильмов из базы данных:', error.message);
        throw new Error('Failed to retrieve movies from database');
    }
};
