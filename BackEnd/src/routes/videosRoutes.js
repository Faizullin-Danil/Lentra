const Router = require('express')
const router = new Router()
const videosController = require('../controllers/videos.controller')

router.get('/', videosController.getVideosByMovieFromAPI);

module.exports = router