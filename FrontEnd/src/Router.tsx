import { Route, Routes} from "react-router-dom"
import MainPage from './Pages/MainPage/MainPage';
import FavouritesPage from './Pages/FavouritesFilmsPage/FavouritesFilmsPage';
import FilmPage from './Pages/FilmPage/FilmPage';
import ActorsByFilmPage from "./Pages/ActorsByFilmPage/ActorsByFilmPage";

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/FavouritesFilmsPage" element={<FavouritesPage/>} />
        <Route path="/film/:id" element={<FilmPage/>} />
        <Route path="/actorsByfilm/:kinopoisk_id" element={<ActorsByFilmPage/>}/>
    </Routes>
  );
};

export default Router;