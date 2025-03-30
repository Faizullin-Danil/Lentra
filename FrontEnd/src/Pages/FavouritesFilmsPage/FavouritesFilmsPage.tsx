import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import "./FavouritesFilmsPage.css"
import ListFilms from '../../components/ListFilms/ListFilms';
import Filter from '../../components/Filter/Filter';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { CircularProgress } from '@mui/material';

const FavouritesFilmsPage = () => {
    const openAlert = useSelector((state: RootState) => state.alert.value);
    const favouritesFilms = useSelector((state: RootState) => state.favouritesFilms.value);
    const [isLoading, setIsLoading] = useState(false);


    return (
        <div className="w-full flex justify-center">
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
