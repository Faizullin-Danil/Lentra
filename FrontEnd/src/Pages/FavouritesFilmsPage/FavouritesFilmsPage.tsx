import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import ListFilms from '../../components/ListFilms/ListFilms';
import Filter from '../../components/Filter/Filter';
import { useEffect, useState } from 'react';
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';
import { Box, CircularProgress, Typography } from '@mui/material';
import { fetchFavouritesFilms } from '../../services/apiService';
import { setClearFilter } from '../../store/FilmsSlice';

const FavouritesFilmsPage = () => {
    // const openAlert = useSelector((state: RootState) => state.alert.value);
    const favouritesFilms = useSelector((state: RootState) => state.favouritesFilms.value);
    const [ isLoading, setIsLoading ] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (favouritesFilms.length === 0) {
            const loadFilms = async () => {
            setIsLoading(true);
            try {
                await fetchFavouritesFilms(dispatch);
            } catch (error) {
                console.error("Ошибка загрузки избранных фильмов:", error);
            } finally {
                setIsLoading(false);
            }
            };

            loadFilms();
        }

        return () => {
            dispatch(setClearFilter());
        };
    }, [])

    return (
        <div className="w-full flex justify-center">
            {isLoading ? (
                <Box className="flex justify-center items-center h-[90vh]">
                    <CircularProgress sx={{ color: 'black'}}/>
                </Box>
            ) : favouritesFilms.length > 0 ? (
                <Box className="w-[80%] flex flex-col items-center ml-40">
                    <Filter whichPage="Страница избранных" />
                    <ListFilms films={favouritesFilms} />
                </Box>
            ) : (
                <Typography className='flex justify-center items-center h-[90vh]'>
                    Пора бы добавить что-то в избранное...
                </Typography>
            )}

            {/* {openAlert && (
                <div className='fixed bottom-5'>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert variant="filled" severity="error">
                            Такого фильтра нет в ваших избранных
                        </Alert>
                    </Stack>
                </div>
            )} */}
        </div>
    );
};

export default FavouritesFilmsPage;
