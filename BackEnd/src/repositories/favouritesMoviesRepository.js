const pool = require('../config/db');

exports.getMovieByKinopoiskId = async (kinopoisk_id) => {
    const query = `SELECT * FROM movies WHERE kinopoisk_id = $1`;
    const result = await pool.query(query, [kinopoisk_id]);

    if (result.rowCount === 0) {
        return null;
    }

    return result.rows[0];
};

exports.checkIfMovieInFavourites = async (kinopoisk_id) => {
    const query = `SELECT * FROM favouritesMovies WHERE kinopoisk_id = $1`;
    const result = await pool.query(query, [kinopoisk_id]);

    return result.rowCount > 0 ? result.rows[0] : null;
};

exports.addMovieToFavourites = async (movie) => {
    const insertQuery = `
        INSERT INTO favouritesMovies (
            imdb_id, kinopoisk_id, name_en, name_original, name_ru,
            countries, genres, persons, poster_url, poster_url_preview,
            rating_imdb, rating_kinopoisk, type, year
        ) VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14
        ) RETURNING *;
    `;

    const values = [
        movie.imdb_id, movie.kinopoisk_id, movie.name_en, movie.name_original, movie.name_ru,
        JSON.stringify(movie.countries), JSON.stringify(movie.genres), JSON.stringify(movie.persons), movie.poster_url, movie.poster_url_preview,
        movie.rating_imdb, movie.rating_kinopoisk, movie.type, movie.year
    ];

    await pool.query(insertQuery, values);
};

exports.removeMovieFromFavourites = async (kinopoisk_id) => {
    const query = `DELETE FROM favouritesMovies WHERE kinopoisk_id = $1`;
    await pool.query(query, [kinopoisk_id]);
};

exports.getAllFavourites = async () => {
    const query = `SELECT * FROM favouritesMovies`;
    const result = await pool.query(query);
    return result.rows;
};
