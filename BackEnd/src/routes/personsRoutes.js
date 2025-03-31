const Router = require('express')
const router = new Router()
const personsController = require('../controllers/personsController')

router.get('/', personsController.getPersonsByMovieFromAPI);
router.get('/movie/:kinopoisk_id', personsController.getPersonsByKinopoiskId);


module.exports = router