const imagesService = require('../services/imagesService');

exports.getPersonsByMovieFromAPI = async (req, res) => {
    try {
        const message = await imagesService.fetchAndSaveImagesByMovies();
        res.json({ message });
    } catch (error) {
        console.error('Ошибка в контроллере images:', error.message);
        res.status(500).json({ error: 'Failed to fetch images' });
    }
};