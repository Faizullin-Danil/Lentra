const movieService = require("../services/moviesService");

exports.getMoviesFromAPI = async (req, res) => {
  try {
    const message = await movieService.fetchAndSaveMovies();
    res.json({ message });
  } catch (error) {
    console.error("Ошибка при запросе к API:", error.message);
    res.status(500).json({ error: "Failed to fetch or save movies" });
  }
};

exports.getAboutMovieFromAPI = async (req, res) => {
  try {
    const { kinopoisk_id } = req.params;
    const movieDetails = await movieService.getMovieDetailsFromAPI(
      kinopoisk_id
    );
    res.json(movieDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAllMoviesFromDB();
    console.log("movies23", movies[0]);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
