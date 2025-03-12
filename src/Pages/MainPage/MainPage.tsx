import "./MainPage.css";
import ListFilms from "../../components/ListFilms/ListFilms";
import Filter from "../../components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { setFilms } from "../../store/FilmsSlice";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { setClearFilter } from "../../store/FilmsSlice";
import { fetchFilms, fetchPersons } from "../../services/apiService"; 

const MainPage = () => {
  const films = useSelector((state: RootState) => state.films.value);
  const openAlert = useSelector((state: RootState) => state.alert.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (films.length === 0) {
      const loadFilms = async () => {
        try {
          const filmsData = await fetchFilms();

          if (filmsData && Array.isArray(filmsData.items)) {
            // Для каждого фильма запрашиваем персон
            const filmsWithPersons = await Promise.all(filmsData.items.map(async (film) => {
              try {
                const personsData = await fetchPersons(film.kinopoiskId);
                return { ...film, persons: personsData || [] };  // Возвращаем пустой массив, если персон нет
              } catch (error) {
                console.error(`Ошибка при получении персон для фильма с ID ${film.kinopoiskId}:`, error);
                return { ...film, persons: [] };  // Возвращаем пустой массив, если произошла ошибка
              }
            }));

            dispatch(setFilms(filmsWithPersons));
          } else {
            throw new Error("Данные фильмов не содержат массив 'items'");
          }
        } catch (error) {
          console.error("Ошибка загрузки данных:", error);
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
      <div className="w-[80%] flex flex-col items-center ml-40">
        <Filter whichPage="Главная страница" />
        <ListFilms films={films} />
      </div>
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
