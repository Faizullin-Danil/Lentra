import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import "./FavouritesFilmsPage.css"
import ListFilms from '../../components/ListFilms/ListFilms';
import Filter from '../../components/Filter/Filter';
import { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { fetchFavouritesMovies, fetchPersons } from "../../services/apiService"
import { setFavouritesFilms, setFavouriteClearFilter } from '../../store/FavouriteFilmsSlice';
import { CircularProgress } from '@mui/material';

const FavouritesFilmsPage = () => {
    const openAlert = useSelector((state: RootState) => state.alert.value);
    const favouritesFilms = useSelector((state: RootState) => state.favouritesFilms.value);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (favouritesFilms.length === 0) {
            const loadFavouritesFilms = async () => {
                setIsLoading(true);
                try {
                    const favouritesFilms = await fetchFavouritesMovies();
                    if (favouritesFilms && Array.isArray(favouritesFilms)) {
                        const filmsWithPersons = await Promise.all(favouritesFilms.map(async (favouriteFilm) => {
                            try {
                                const personsData = await fetchPersons(favouriteFilm.kinopoisk_id);
                                return { ...favouriteFilm, persons: personsData || [] };
                            } catch (error) {
                                console.error(`Ошибка при получении персон для фильма с ID ${favouriteFilm.kinopoisk_id}:`, error);
                                return { ...favouriteFilm, persons: [] };
                            }
                        }));

                        dispatch(setFavouritesFilms(filmsWithPersons));
                    } else {
                        throw new Error("Данные фильмов не содержат массив 'items'");
                    }
                } catch (error) {
                    console.error("Ошибка загрузки kinopoisk_id избранных фильмов:", error);
                } finally {
                    setIsLoading(false);
                }
            };
            loadFavouritesFilms();
        }

        return () => {
            dispatch(setFavouriteClearFilter());
        };
    }, []);

    console.log(favouritesFilms)

    return (
        <div className="mt-[70px] w-full flex justify-center">
            {isLoading ? ( // Если идёт загрузка — показываем индикатор
                <div className="flex justify-center items-center h-[90vh]">
                    <CircularProgress size={60} />
                </div>
            ) : favouritesFilms.length > 0 ? ( // Если загрузка закончилась и есть фильмы
                <div className="w-[80%] flex flex-col items-center ml-40">
                    <Filter whichPage="Страница избранных" />
                    <ListFilms films={favouritesFilms} />
                </div>
            ) : ( // Если фильмов нет
                <h1 className='flex justify-center items-center h-[90vh]'>
                    Пора бы добавить что-то в избранное...
                </h1>
            )}

            {openAlert && (
                <div className='fixed bottom-5'>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert variant="filled" severity="error">
                            Такого фильтра нет в ваших избранных
                        </Alert>
                    </Stack>
                </div>
            )}
        </div>
    );
};

export default FavouritesFilmsPage;
