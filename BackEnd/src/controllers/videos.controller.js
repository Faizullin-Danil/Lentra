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
