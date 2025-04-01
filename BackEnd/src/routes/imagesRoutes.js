const Router = require('express')
const router = new Router()
const imagesController = require('../controllers/imagesController')

router.get('/:kinopoisk_id', imagesController.getImages);

module.exports = router