const axios = require('axios');
const imagesRepository = require('../repositories/imagesRepository');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

exports.fetchAndSaveImagesByMovies = async () => {
    try {
        const kinopoiskIds = await imagesRepository.getKinopoiskIdfromDB()

        const kinopoiskIdsArray = kinopoiskIds.map(movie => movie.kinopoisk_id);
        console.log(kinopoiskIdsArray)

        return kinopoiskIdsArray
    } catch (error) {
        console.log("Ошибка в сервисе images", error)
    }
};
