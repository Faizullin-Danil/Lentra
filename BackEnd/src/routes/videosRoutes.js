const Router = require('express')
const router = new Router()
const videosController = require('../controllers/videos.controller')

router.get('/', videosController.getVideosByMovieFromAPI); // берет видео из API кинопоиска и вставляет в мою бд

module.exports = router