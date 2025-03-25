import "./MainPage.css";
import ListFilms from "../../components/ListFilms/ListFilms";
import Filter from "../../components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { setFilms } from "../../store/FilmsSlice";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { setClearFilter } from "../../store/FilmsSlice";
import { fetchFilms, fetchPersons } from "../../services/apiService"; 
import { CircularProgress } from '@mui/material';

const MainPage = () => {
  const films = useSelector((state: RootState) => state.films.value);
  const openAlert = useSelector((state: RootState) => state.alert.value);
  const [ isLoading, setIsLoading ] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (films.length === 0) {

      const loadFilms = async () => {
        setIsLoading(true)
        try {
          const filmsData = await fetchFilms();
          if (filmsData && Array.isArray(filmsData)) {
            const filmsWithPersons = await Promise.all(filmsData.map(async (film) => {
              try {
                const personsData = await fetchPersons(film.kinopoisk_id);
                return { ...film, persons: personsData || [] };  
              } catch (error) {
                console.error(`Ошибка при получении персон для фильма с ID ${film.kinopoisk_id}:`, error);
                return { ...film, persons: [] };
              }
            }));

            dispatch(setFilms(filmsWithPersons));
          } else {
            throw new Error("Данные фильмов не содержат массив 'items'");
          }
        } catch (error) {
          console.error("Ошибка загрузки данных:", error);
        } finally {
          setIsLoading(false)
        }
      };
      loadFilms();
    }

    return () => {
      dispatch(setClearFilter());
    };
  }, [dispatch]);

  console.log(films);

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
