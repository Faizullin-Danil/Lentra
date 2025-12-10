import ListFilms from "../../components/ListFilms/ListFilms";
import Filter from "../../components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { setClearFilter } from "../../store/FilmsSlice";
import { fetchFavouritesFilms, fetchFilms } from "../../services/apiService";
import { Alert, Box, Stack } from "@mui/material";

const FilmsPage = () => {
  const films = useSelector((state: RootState) => state.films.value);
  const favouritesFilms = useSelector(
    (state: RootState) => state.favouritesFilms.value
  );
  const openAlert = useSelector((state: RootState) => state.alert.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (films.length === 0) {
      const loadFilms = async () => {
        try {
          await fetchFilms(dispatch);
        } catch (error) {
          console.error("Ошибка загрузки фильмов:", error);
        } finally {
        }
      };

      loadFilms();
    }

    if (favouritesFilms.length === 0) {
      const loadFilms = async () => {
        try {
          await fetchFavouritesFilms(dispatch);
        } catch (error) {
          console.error("Ошибка загрузки избранных фильмов:", error);
        }
      };

      loadFilms();
    }

    return () => {
      dispatch(setClearFilter());
    };
  }, []);

  return (
    <Box className="flex justify-center">
      <Box className="w-[80%] flex flex-col items-center ml-40">
        <Filter whichPage="Главная страница" />
        <ListFilms films={films} />
      </Box>
      {openAlert && (
        <div className="fixed bottom-5">
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="filled" severity="error">
              Такого фильтра нет
            </Alert>
          </Stack>
        </div>
      )}
    </Box>
  );
};

export default FilmsPage;
