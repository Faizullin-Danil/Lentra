import "./MainPage.css";
import ListFilms from "../../components/ListFilms/ListFilms";
import Filter from "../../components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { setClearFilter } from "../../store/FilmsSlice";
import { fetchFilms, fetchFavouritesFilms } from "../../services/apiService"; 
import { CircularProgress } from '@mui/material';

const MainPage = () => {
  const films = useSelector((state: RootState) => state.films.value);
  const favouritesFilms = useSelector((state: RootState) => state.favouritesFilms.value);
  const openAlert = useSelector((state: RootState) => state.alert.value);
  const [ isLoading, setIsLoading ] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (films.length === 0) {  // Загружать только если фильмов нет
      const loadFilms = async () => {
        setIsLoading(true);
        try {
          await fetchFilms(dispatch);
        } catch (error) {
          console.error("Ошибка загрузки фильмов:", error);
        } finally {
          setIsLoading(false);
        }
      };
  
      loadFilms();
    }

    if (favouritesFilms.length === 0) {  // Загружать только если фильмов нет
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
  }, [dispatch]); // Теперь ререндер только при изменении dispatch
  

  // console.log("фильмы", films);
  // console.log("избранные фильмы", favouritesFilms);


  return (
    <div className="mt-[70px] flex justify-center">
      {isLoading ? (
        <div className="flex items-center justify-center h-[80vh] w-full">
          <CircularProgress />
        </div>
      ) : (
        <div className="w-[80%] flex flex-col items-center ml-40">
          <Filter whichPage="Главная страница" />
          <ListFilms films={films} />
        </div>
      )}
      {openAlert && (
        <div className="fixed bottom-5">
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="filled" severity="error">
              Такого фильтра нет
            </Alert>
          </Stack>
        </div>
      )}
    </div>
  );
};

export default MainPage;
