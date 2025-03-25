const axios = require('axios');
const pool = require('../db');

const API_KEY = '2695d350-4670-46ae-a005-dd42d5243474';
const API_URL_AllMovies = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';

exports.getMoviesFromAPI = async (req, res) => {
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

            try {
                await pool.query(
                    'INSERT INTO movies (imdb_id, kinopoisk_id, name_ru, name_original, name_en, countries, genres, poster_url, poster_url_preview, rating_imdb, rating_kinopoisk, type, year) ' + 
                    'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) ' +
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
                        year
                    ]
                );
            } catch (dbError) {
                console.error('Ошибка при вставке в базу данных отношение movies:', dbError.message);
            }
        }

        res.json({ message: 'Movies successfully added to the database!' });
    } catch (error) {
        console.error('Ошибка при запросе к API:', error.message);
        res.status(500).json({ error: 'Failed to fetch or save movies' });
    }
};

exports.getAboutMovieFromAPI = async (req, res) => {
    try {
        const { kinopoisk_id } = req.params

        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${kinopoisk_id}`, {
            headers: {
                'X-API-KEY': API_KEY
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllMovies = async (req, res) => {
    try {
        const result = await pool.query('select * from movies');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
