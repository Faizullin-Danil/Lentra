const Router = require('express')
const router = new Router()
const imagesController = require('../controllers/imagesController')

router.get('/', imagesController.getPersonsByMovieFromAPI);


module.exports = router