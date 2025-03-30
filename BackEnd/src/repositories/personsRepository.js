const pool = require('../config/db');

exports.savePerson = async (personData) => {
    const { staffId, kinopoiskId, nameRu, nameEn, description, posterUrl, professionText, professionKey } = personData;

    try {
        await pool.query(
            `INSERT INTO persons (staff_id, kinopoisk_id, name_en, name_ru, description, poster_url, profession_text, profession_key) ` +
            `VALUES ($1, $2, $3, $4, $5, $6, $7, $8) ` +
            `ON CONFLICT (staff_id) DO NOTHING`,
            [
                staffId,
                kinopoiskId,
                nameEn || null,
                nameRu || null,
                description || null,
                posterUrl || null,
                professionText || null,
                professionKey || null
            ]
        );
    } catch (error) {
        console.error('Ошибка при вставке в базу данных отношение persons:', error.message);
        throw new Error('Failed to save person in database');
    }
};

exports.getPersonsByKinopoiskId = async (kinopoisk_id) => {
    try {
        const result = await pool.query(
            "SELECT * FROM persons WHERE kinopoisk_id = $1", 
            [kinopoisk_id]
        );
        return result.rows;
    } catch (error) {
        console.error('Ошибка при получении персон по kinopoisk_id:', error.message);
        throw new Error('Failed to retrieve persons from database');
    }
};
