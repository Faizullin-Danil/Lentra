const Router = require('express')
const router = new Router()
const actorsController = require('../controllers/actorsController')

router.get('/:kinopoisk_id', actorsController.getActorByMovieFromAPI);

module.exports = router