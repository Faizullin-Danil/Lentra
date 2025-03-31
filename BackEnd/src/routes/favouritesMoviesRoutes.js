const Router = require('express')
const router = new Router()
const favouritemovieController = require('../controllers/favouritesMoviesController')

router.post('/:kinopoisk_id', favouritemovieController.addFavouriteMovie);
router.delete('/:kinopoisk_id', favouritemovieController.deleteFavouriteMovie);
router.get('/', favouritemovieController.getAllFavouritesMovies);

module.exports = router