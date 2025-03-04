import { Route, Routes} from "react-router-dom"
import MainPage from './components/Pages/MainPage/MainPage';
import FavoutitesPage from './components/Pages/FavoutitesFilmsPage/FavoutitesFilmsPage';
import FilmPage from './components/Pages/FilmPage/FilmPage';

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