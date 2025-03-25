const Router = require('express')
const router = new Router()
const moviesController = require('../controllers/movies.controller')
const personsController = require('../controllers/persons.controller')
const favouritemovie = require('../controllers/favouritesMovies.controller')

router.get('/fetch-movies', moviesController.getMoviesFromAPI);
router.get('/movies', moviesController.getAllMovies);
router.get('/persons', personsController.getPersonsByMovieFromAPI);
router.get('/movie/:kinopoisk_id/persons', personsController.getPersonsByKinopoiskId);
router.post('/favouritemovie/:kinopoisk_id', favouritemovie.addFavouriteMovie);
router.delete('/favouritemovie/:kinopoisk_id', favouritemovie.deleteFavouriteMovie);
router.get('/favouritemovie', favouritemovie.getAllFavouritesMovies);

module.exports = router