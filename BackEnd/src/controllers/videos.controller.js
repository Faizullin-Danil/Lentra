const videoService = require('../services/videosService');

exports.getVideosByMovieFromAPI = async (req, res) => {
    try {
        const message = await videoService.getVideosByMovieFromAPI();
        res.status(200).json({ message });
    } catch (error) {
        console.error('Ошибка при запросе видео по фильму:', error.message);
        res.status(500).json({ error: 'Не удалось получить видео' });
    }
};

exports.getAboutMovieFromAPI = async (req, res) => {
    try {
        const { kinopoisk_id } = req.params;
        const movieInfo = await videoService.getAboutMovieFromAPI(kinopoisk_id);
        res.json(movieInfo);
    } catch (error) {
        console.error('Ошибка при получении информации о фильме:', error.message);
        res.status(500).json({ error: 'Не удалось получить информацию о фильме' });
    }
};

exports.getAllMovies = async (req, res) => {
    try {
        const movies = await videoService.getAllMovies();
        res.json(movies);
    } catch (error) {
        console.error('Ошибка при получении всех фильмов:', error.message);
        res.status(500).json({ error: 'Не удалось получить фильмы' });
    }
};
