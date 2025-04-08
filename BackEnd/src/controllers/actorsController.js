const actorsService = require('../services/actorsService');

exports.getActorByMovieFromAPI = async (req, res) => {
    try {
        const actor_id = parseInt(req.params.kinopoisk_id);
        const actor = await actorsService.getActorByMovieFromAPI(actor_id);
        res.json({ actor });
    } catch (error) {
        console.error('Ошибка в контроллере actors в getActorsByMovieFromAPI:', error.message);
        res.status(500).json({ error: 'Failed to fetch actors' });
    }
};
