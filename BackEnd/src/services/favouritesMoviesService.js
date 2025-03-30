const axios = require('axios');
const favouriteMovieRepository = require('../repositories/favouritesMoviesRepository');
const pool = require('../config/db');
require('dotenv').config();

const API_URL_AllMovies = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';

exports.addFavouriteMovie = async (kinopoisk_id) => {
    // Проверяем, есть ли фильм в базе
    const movie = await favouriteMovieRepository.getMovieByKinopoiskId(kinopoisk_id);
    if (!movie) {
        throw new Error("Фильм не найден в базе");
    }

    // Проверяем, есть ли фильм уже в избранном
    const existingFavourite = await favouriteMovieRepository.checkIfMovieInFavourites(kinopoisk_id);
    if (existingFavourite) {
        throw new Error("Фильм уже в избранном");
    }

    // Добавляем фильм в избранное
    await favouriteMovieRepository.addMovieToFavourites(movie);
    return "Фильм успешно добавлен в избранное";
};

exports.deleteFavouriteMovie = async (kinopoisk_id) => {
    // Удаляем фильм из избранного
    await favouriteMovieRepository.removeMovieFromFavourites(kinopoisk_id);
    return "Фильм успешно удален из избранного";
};

exports.getAllFavouritesMovies = async () => {
    // Получаем все избранные фильмы
    return await favouriteMovieRepository.getAllFavourites();
};
