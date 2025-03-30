const Router = require('express')
const router = new Router()
const moviesController = require('../controllers/movies.controller')

router.get('/fetch-movies', moviesController.getMoviesFromAPI);
router.get('/', moviesController.getAllMovies);
router.get('/:kinopoisk_id', moviesController.getAboutMovieFromAPI)

module.exports = router