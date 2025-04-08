const similarMoviesService = require('../services/similarMoviesService');

exports.getSimilarMoviesByMovieFromAPI = async (req, res) => {
    try {        
        const message = await similarMoviesService.getSimilarMoviesByMovieFromAPI();
        res.status(200).json({ message });
    } catch (error) {
        console.error('Ошибка при запросе похожих по фильму:', error.message);
        res.status(500).json({ error: 'Не удалось получить похожие' });
    }
};

exports.getSimilarMovieFromAPI = async (req, res) => {
    try {
        const kinopoisk_id = parseInt(req.params.kinopoisk_id);
        similarMovie = await similarMoviesService.getSimilarMovieFromAPI(kinopoisk_id);
        
        res.json(similarMovie)
    } catch (error) {
        console.log("ошибка в контроллере похожих в getSimilarMovies: ", error)
    }
}

exports.getSimilarMovies = async (req, res) => {
    try {
        const kinopoisk_id = parseInt(req.params.kinopoisk_id);
        const similarMovies = await similarMoviesService.getSimilarMovies(kinopoisk_id)
        res.json(similarMovies)
    } catch (error) {
        console.log("ошибка в контроллере похожих в getSimilarMovies: ", error)
    }
}




