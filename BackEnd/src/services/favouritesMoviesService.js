const favouriteMovieRepository = require('../repositories/favouritesMoviesRepository');

exports.addFavouriteMovie = async (kinopoisk_id) => {
    const movie = await favouriteMovieRepository.getMovieByKinopoiskId(kinopoisk_id);
    if (!movie) {
        throw new Error("Фильм не найден в базе");
    }

    await favouriteMovieRepository.addMovieToFavourites(movie);
    return "Фильм успешно добавлен в избранное";
};

exports.deleteFavouriteMovie = async (kinopoisk_id) => {
    await favouriteMovieRepository.removeMovieFromFavourites(kinopoisk_id);
    return "Фильм успешно удален из избранного";
};

exports.getAllFavouritesMovies = async () => {
    return await favouriteMovieRepository.getAllFavourites();
};
