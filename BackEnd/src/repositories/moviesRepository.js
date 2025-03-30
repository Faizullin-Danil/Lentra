const pool = require('../config/db');

exports.saveMovie = async (movieData) => {
    const { imdbId, kinopoiskId, nameRu, nameOriginal, nameEn, countries, genres, posterUrl, posterUrlPreview, ratingImdb, ratingKinopoisk, type, year, filmLength, description, ratingAgeLimits } = movieData;

    try {
        await pool.query(
            'INSERT INTO movies (imdb_id, kinopoisk_id, name_ru, name_original, name_en, countries, genres, poster_url, poster_url_preview, rating_imdb, rating_kinopoisk, type, year, movie_length, description, rating_age_limits) ' +
            'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) ' +
            'ON CONFLICT (kinopoisk_id) DO NOTHING', 
            [
                imdbId, 
                kinopoiskId, 
                nameRu, 
                nameOriginal, 
                nameEn, 
                JSON.stringify(countries),
                JSON.stringify(genres),
                posterUrl, 
                posterUrlPreview, 
                ratingImdb, 
                ratingKinopoisk, 
                type, 
                year,
                filmLength, 
                description,
                ratingAgeLimits
            ]
        );
    } catch (error) {
        console.error('Ошибка при вставке в базу данных:', error.message);
        throw new Error('Failed to save movie in database');
    }
};

exports.getAllMovies = async () => {
    try {
        const result = await pool.query('SELECT * FROM movies');
        return result.rows;
    } catch (error) {
        console.error('Ошибка при получении фильмов из базы данных:', error.message);
        throw new Error('Failed to retrieve movies from database');
    }
};
