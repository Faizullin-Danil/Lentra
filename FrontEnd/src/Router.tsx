import { BrowserRouter, Route, Routes} from "react-router-dom"
import React, { Suspense } from "react";
import MainPage from "./Pages/MainPage/MainPage";
import Layout from "./components/Layout";
import { Box, CircularProgress } from "@mui/material";

const LazyFilmsPage = React.lazy(() => import('./Pages/FilmsPage/FilmsPage'));
const LazyFavouritesPage = React.lazy(() => import('./Pages/FavouritesFilmsPage/FavouritesFilmsPage'));
const LazyFilmPage = React.lazy(() => import('./Pages/FilmPage/FilmPage'));
const LazyActorsByFilmPage = React.lazy(() => import('./Pages/ActorsByFilmPage/ActorsByFilmPage'));
const LazyActorPage = React.lazy(() => import('./Pages/ActorPage/ActorPage'));

const routes = [
  { path: '', element: <MainPage /> },
  { path: '/films', element: <LazyFilmsPage /> },
  { path: '/favourites', element: <LazyFavouritesPage /> },
  { path: '/film/:kinopoisk_id', element: <LazyFilmPage /> },
  { path: '/actorsbyfilm/:kinopoisk_id', element: <LazyActorsByFilmPage /> },
  { path: '/actor/:actor_id', element: <LazyActorPage /> },
];

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              {routes.map((route, index) => (
                  <Route key={index} path={route.path} element={
                    <Suspense fallback={
                      <Box className="flex items-center justify-center w-full h-screen">
                        <CircularProgress sx={{ color: 'black'}}/>
                      </Box>
                      } >
                      {route.element}
                    </Suspense>
                  }/>
              ))}
            </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default Router;