const axios = require('axios');
const personRepository = require('../repositories/personsRepository');
const pool = require('../config/db');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

exports.fetchAndSavePersonsByMovies = async () => {
    try {
        const movies = await pool.query('SELECT id, kinopoisk_id FROM movies');

        if (!movies) {
            throw new Error("moviesId не вернулось");
        }

        for (const movie of movies.rows) {
            try {
                const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v1/staff', {
                    headers: { 'X-API-KEY': API_KEY },
                    params: { filmId: movie.kinopoisk_id }
                });

                for (const person of response.data) {
                    const { staffId, nameRu, nameEn, description, posterUrl, professionText, professionKey } = person;
                    await personRepository.savePerson({
                        staffId,
                        kinopoiskId: movie.kinopoisk_id,
                        nameRu,
                        nameEn,
                        description,
                        posterUrl,
                        professionText,
                        professionKey
                    });
                }
            } catch (error) {
                console.error('Ошибка при запросе персон для фильма:', error.message);
            }
        }

        return 'Данные успешно сохранены в базу данных';
    } catch (error) {
        console.error('Ошибка при запросе к API:', error.message);
        throw new Error('Failed to fetch or save persons');
    }
};

exports.getPersonsByKinopoiskId = async (kinopoisk_id) => {
    try {
        return await personRepository.getPersonsByKinopoiskId(kinopoisk_id);
    } catch (error) {
        console.error('Ошибка при получении персон по kinopoisk_id:', error.message);
        throw new Error('Failed to retrieve persons from database');
    }
};
