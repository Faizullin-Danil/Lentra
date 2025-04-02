const axios = require('axios');
const similarMoviesRepository = require('../repositories/similarMoviesRepository');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

exports.getSimilarMoviesByMovieFromAPI = async () => {
    try {
        const kinopoiskIds = await similarMoviesRepository.getKinopoiskIdfromDB()

        const kinopoiskIdsArray = kinopoiskIds.map(movie => movie.kinopoisk_id);

        console.log(kinopoiskIds)
        
        for (const kinopoiskId of kinopoiskIdsArray) {
            try {
                const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${kinopoiskId}/similars`, {
                            headers: {
                                'X-API-KEY': API_KEY,
                            }
                });
                // console.log(response.data.items)

                await similarMoviesRepository.addSimilarMoviesInDB(kinopoiskId, response.data.items)
            } catch (error) {
                console.error('Ошибка в цикле сервиса similar в getSimilarMoviesByMovieFromAPI:', error.message);
            }
        }
        
        return 'success'

    } catch (error) {
        console.log("Ошибка в сервисе similar в getSimilarMoviesByMovieFromAPI", error)
    }
};

exports.getSimilarMovies = async (kinopoisk_id) => {
    try {
        return await similarMoviesRepository.getSimilarMoviesFromDB(kinopoisk_id)
    } catch (error) {
        console.log("Ошибка в сервисе similarMovies в getSimilarMovies", error)
    }
};