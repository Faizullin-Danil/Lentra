const axios = require('axios');
const pool = require('../db');

const API_KEY = '2695d350-4670-46ae-a005-dd42d5243474';
const API_URL_AllMovies = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';

exports.addFavouriteMovie = async (req, res) => {
    try {
        const { kinopoisk_id } = req.params;

        if (!kinopoisk_id) {
            return res.status(400).json({ message: "kinopoisk_id не передан" });
        }

        // Проверяем, есть ли фильм в `movies`
        const movieQuery = `SELECT * FROM movies WHERE kinopoisk_id = $1`;
        const movieResult = await pool.query(movieQuery, [kinopoisk_id]);

        if (movieResult.rowCount === 0) {
            return res.status(404).json({ message: "Фильм не найден в базе" });
        }

        const movie = movieResult.rows[0];
        console.log(movie)
        // Проверяем, есть ли фильм уже в `favouritesMovies`
        const checkQuery = `SELECT * FROM favouritesMovies WHERE kinopoisk_id = $1`;
        const checkResult = await pool.query(checkQuery, [kinopoisk_id]);

        if (checkResult.rowCount > 0) {
            return res.status(409).json({ message: "Фильм уже в избранном", movie: checkResult.rows[0] });
        }

        // Добавляем фильм в `favouritesMovies`
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

        const result = await pool.query(insertQuery, values);

        return res.status(201).json({
            message: "Фильм успешно добавлен в избранное",
            movie: result.rows[0]
        });

    } catch (error) {
        console.error('Ошибка при добавлении фильма в избранное:', error);
        res.status(500).json({ error: 'Не удалось добавить фильм' });
    }
};

exports.deleteFavouriteMovie = async (req, res) => {
    try {
        const { kinopoisk_id } = req.params

        const query = `
            DELETE FROM favouritesMovies
            WHERE kinopoisk_id = $1;
        `

        const result = await pool.query(query, [kinopoisk_id])

        return res.status(200).json({
            message: "Фильм успешно удален из избранного",
            kinopoisk_id
        });

    } catch (error) {
        console.error('Ошибка при удалении фильма из избранного:', error.message);
        res.status(500).json({ error: 'Не удалось удалить фильм' });
    }
}

exports.getAllFavouritesMovies = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM favouritesmovies')
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}