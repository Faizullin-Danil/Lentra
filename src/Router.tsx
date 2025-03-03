import React from 'react';
import { Route, Routes} from "react-router-dom"
import MainPage from './components/Pages/MainPage/MainPage';
import FavoutitesPage from './components/Pages/FavoutitesFilmsPage/FavoutitesFilmsPage';


const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/FavoutitesFilmsPage" element={<FavoutitesPage/>} />
    </Routes>
  );
};

export default Router;