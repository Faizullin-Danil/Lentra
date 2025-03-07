import "./MainPage.css";
import ListFilms from "../../ListFilms/ListFilms";
import Filter from "../../Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { setFilms } from "../../../store/FilmsSlice";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { setClearFilter } from "../../../store/FilmsSlice";

// import mockFilms from "../../../mockFilms";

const MainPage = () => {
  const films = useSelector((state: RootState) => state.films.value);
  const openAlert = useSelector((state: RootState) => state.alert.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (films.length === 0) {
      const fetchFilms = async () => {
        try {
          const response = await fetch("https://api.kinopoisk.dev/v1.4/movie?page=1&limit=15&selectFields=name&selectFields=enName&selectFields=year&selectFields=rating&selectFields=countries&selectFields=poster&selectFields=genres&selectFields=persons&selectFields=movieLength&selectFields=id&notNullFields=name&notNullFields=enName&notNullFields=poster.url&type=movie", {
            method: "GET",
            headers: {
              "X-API-KEY": "CY4H6JG-W8D4NK0-GF0BJZE-507QBP1"
            }
          });
          if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
          }

          const data = await response.json();
          dispatch(setFilms(data.docs)); 
        } catch (error) {
          console.error("Ошибка загрузки данных:", error);
        }
      };
      fetchFilms(); 
    } 

    return () => {
      dispatch(setClearFilter())
    }
  }, []);

  return (
    <div className=" mt-[70px] flex justify-center">
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
