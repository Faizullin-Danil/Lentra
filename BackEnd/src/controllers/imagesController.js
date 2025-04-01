const imagesService = require('../services/imagesService');

exports.getImagesByMovieFromAPI = async (req, res) => {
    try {
        const message = await imagesService.fetchAndSaveImagesByMovies();
        res.json({ message });
    } catch (error) {
        console.error('Ошибка в контроллере images в getImagesByMovieFromAPI:', error.message);
        res.status(500).json({ error: 'Failed to fetch images' });
    }
};

exports.getImages = async (req, res) => {
    try {
        const kinopoisk_id = parseInt(req.params.kinopoisk_id);
        const images = await imagesService.getImages(kinopoisk_id)
        res.json(images)
    } catch (error) {
        console.log("ошибка в контроллере Images в getImages: ", error)
    }
}