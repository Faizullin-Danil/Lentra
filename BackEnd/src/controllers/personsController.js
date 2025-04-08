const personService = require('../services/personsService');

exports.getPersonsByMovieFromAPI = async (req, res) => {
    try {
        const message = await personService.fetchAndSavePersonsByMovies();
        res.json({ message });
    } catch (error) {
        console.error('Ошибка при запросе персон по фильму:', error.message);
        res.status(500).json({ error: 'Failed to fetch persons' });
    }
};

exports.getPersonsByKinopoiskId = async (req, res) => {
    try {
        const kinopoisk_id = parseInt(req.params.kinopoisk_id);
        const persons = await personService.getPersonsByKinopoiskId(kinopoisk_id);
        res.json(persons);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
