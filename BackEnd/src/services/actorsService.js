const axios = require('axios');
const actorsRepository = require('../repositories/actorsRepository');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

exports.getActorByMovieFromAPI = async (actor_id) => {
    try {
        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v1/staff/${actor_id}`, {
            headers: {
                'X-API-KEY': API_KEY
            }
        })
        console.log(response)
        return response.data

    } catch (error) {
        console.log("Ошибка в сервисе images в fetchAndSaveImagesByMovies", error)
    }
};
