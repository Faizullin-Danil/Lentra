import { Route, Routes} from "react-router-dom"
import FilmsPage from './Pages/FilmsPage/FilmsPage';
import FavouritesPage from './Pages/FavouritesFilmsPage/FavouritesFilmsPage';
import FilmPage from './Pages/FilmPage/FilmPage';
import ActorsByFilmPage from "./Pages/ActorsByFilmPage/ActorsByFilmPage";
import ActorPage from "./Pages/ActorPage/ActorPage";

const Router = () => {
  return (
    <Routes>
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/film/:kinopoisk_id" element={<FilmPage />} />
        <Route path="/actorsbyfilm/:kinopoisk_id" element={<ActorsByFilmPage />} />
        <Route path="/actor/:actor_id" element={<ActorPage />} />
    </Routes>
  );
};

export default Router;