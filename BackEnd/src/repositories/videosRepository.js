const pool = require('../config/db');

exports.getMovies = async () => {
    const query = 'SELECT id, kinopoisk_id FROM movies';
    const result = await pool.query(query);

    return result.rows;
};

exports.getAllMovies = async () => {
    const query = 'SELECT * FROM movies';
    const result = await pool.query(query);

    return result.rows;
};
