import { Route, Routes} from "react-router-dom"
import FilmsPage from './Pages/FilmsPage/FilmsPage';
import FavouritesPage from './Pages/FavouritesFilmsPage/FavouritesFilmsPage';
import FilmPage from './Pages/FilmPage/FilmPage';
import ActorsByFilmPage from "./Pages/ActorsByFilmPage/ActorsByFilmPage";

const Router = () => {
  return (
    <Routes>

        <Route path="/films" element={<FilmsPage/>} />
        <Route path="/favourites" element={<FavouritesPage/>} />
        <Route path="/film/:id" element={<FilmPage/>} />
        <Route path="/actorsbyfilm/:kinopoisk_id" element={<ActorsByFilmPage/>}/>
    </Routes>
  );
};

export default Router;