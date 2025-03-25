const axios = require('axios');
const pool = require('../db');

const API_KEY = '2695d350-4670-46ae-a005-dd42d5243474';

exports.getPersonsByMovieFromAPI = async (req, res) => {
    try {
        const movies = await pool.query('select id, kinopoisk_id from movies');

        if (!movies) {
            return res.status(400).json({ error: "moviesId не вернулось" });
        } 


        for (const movie of movies.rows) {
            try {
                const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v1/staff`, {
                    headers: {
                        'X-API-KEY': API_KEY
                    },
                    params: {
                        filmId: movie.kinopoisk_id
                    }
                });
                for (const person of response.data) {
                    const { staffId, nameRu, nameEn, description, posterUrl, professionText, professionKey } = person;
                
                    await pool.query(
                        `INSERT INTO persons (staff_id, kinopoisk_id, name_en, name_ru, description, poster_url, profession_text, profession_key) ` +
                        `VALUES ($1, $2, $3, $4, $5, $6, $7, $8)` +
                        `ON CONFLICT (staff_id) DO NOTHING `,
                        [
                            staffId,
                            movie.kinopoisk_id,
                            nameEn || null, 
                            nameRu || null,
                            description || null,
                            posterUrl || null,
                            professionText || null,
                            professionKey || null
                        ]
                    );
                }                        
            } catch (error) {
                console.error('Ошибка при вставке в базу данных отношение persons:', error.message);
            }
        }

        res.json({success: 'данные сохранены в базу данных'})

    } catch (error) {
        console.error('Ошибка при запросе персон по фильму:', error.message);
        res.status(500).json({ error: 'Failed to fetch persons' });
    }
}

exports.getPersonsByKinopoiskId = async (req, res) => {
    try {
        const { kinopoisk_id } = req.params; // Получаем из параметров маршрута

        if (!kinopoisk_id) {
            return res.status(400).json({ error: "kinopoisk_id is required" });
        }

        const result = await pool.query(
            "SELECT * FROM persons WHERE kinopoisk_id = $1", 
            [kinopoisk_id]
        );

        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

