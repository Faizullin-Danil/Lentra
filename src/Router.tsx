import { Route, Routes} from "react-router-dom"
import MainPage from './Pages/MainPage/MainPage';
import FavoutitesPage from './Pages/FavouritesFilmsPage/FavouritesFilmsPage';
import FilmPage from './Pages/FilmPage/FilmPage';

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/FavoutitesFilmsPage" element={<FavoutitesPage/>} />
        <Route path="/film/:id" element={<FilmPage/>}/>
    </Routes>
  );
};

export default Router;