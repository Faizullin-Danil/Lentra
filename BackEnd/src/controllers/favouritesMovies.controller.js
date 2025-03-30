const favouriteMovieService = require('../services/favouritesMoviesService');

exports.addFavouriteMovie = async (req, res) => {
    try {
        const { kinopoisk_id } = req.params;
        const message = await favouriteMovieService.addFavouriteMovie(kinopoisk_id);
        res.status(201).json({ message });
    } catch (error) {
        console.error('Ошибка при добавлении фильма в избранное:', error.message);
        res.status(500).json({ error: 'Не удалось добавить фильм' });
    }
};

exports.deleteFavouriteMovie = async (req, res) => {
    try {
        const { kinopoisk_id } = req.params;
        const message = await favouriteMovieService.deleteFavouriteMovie(kinopoisk_id);
        res.status(200).json({ message });
    } catch (error) {
        console.error('Ошибка при удалении фильма из избранного:', error.message);
        res.status(500).json({ error: 'Не удалось удалить фильм' });
    }
};

exports.getAllFavouritesMovies = async (req, res) => {
    try {
        const favourites = await favouriteMovieService.getAllFavouritesMovies();
        res.json(favourites);
    } catch (error) {
        console.error('Ошибка при получении всех избранных фильмов:', error.message);
        res.status(500).json({ error: error.message });
    }
};
