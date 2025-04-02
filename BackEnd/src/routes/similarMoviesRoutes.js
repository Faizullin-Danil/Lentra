const Router = require('express')
const router = new Router()
const similarMoviesController = require('../controllers/similarMoviesController')

router.get('/fetch-similarmovies', similarMoviesController.getSimilarMoviesByMovieFromAPI); 
router.get('/:kinopoisk_id', similarMoviesController.getSimilarMovies); 


module.exports = router