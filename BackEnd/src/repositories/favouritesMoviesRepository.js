const pool = require('../config/db');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getMovieByKinopoiskId = async (kinopoisk_id) => {
    const result = await prisma.movies.findUnique({
        where: { kinopoisk_id: parseInt(kinopoisk_id, 10) }
    });

    if (!result) {
        return null;  
    }

    return result;  
};

exports.checkIfMovieInFavourites = async (kinopoisk_id) => {
    const result = await prisma.favouritesmovies.findUnique({
        where: { kinopoisk_id: parseInt(kinopoisk_id, 10) }
    });

    if (!result) {
        return null;  
    }

    return result;  
};


exports.addMovieToFavourites = async (movie) => {
    await prisma.favouritesmovies.create({
        data: {
            imdb_id: movie.imdb_id,
            kinopoisk_id: movie.kinopoisk_id,
            name_en: movie.name_en,
            name_original: movie.name_original,
            name_ru: movie.name_ru,
            countries: movie.countries,
            genres: movie.genres,
            persons: movie.persons,
            poster_url: movie.poster_url,
            poster_url_preview: movie.poster_url_preview,
            rating_imdb: movie.rating_imdb,
            rating_kinopoisk: movie.rating_kinopoisk,
            type: movie.type,
            year: movie.year,
            movie_length: movie.movie_length,
            description: movie.description,
            rating_age_limits: movie.rating_age_limits,
            videos: movie.videos
        }
    });
};

exports.removeMovieFromFavourites = async (kinopoisk_id) => {
    await prisma.favouritesmovies.delete({
        where: { kinopoisk_id: parseInt(kinopoisk_id, 10) }
    });
};

exports.getAllFavourites = async () => {
    const result = await prisma.favouritesmovies.findMany();
    console.log(result)
    return result;
};
