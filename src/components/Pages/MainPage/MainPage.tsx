import "./MainPage.css";
import ListFilms from "../../ListFilms/ListFilms";
import Filter from "../../Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { setFilms } from "../../../store/FilmsSlice";
import { setFilteredFilms } from "../../../store/FilteredFilmsSlice";

// import mockFilms from "../../../mockFilms";


const MainPage = () => {
  const films = useSelector((state: RootState) => state.films.value);
  const filteredFilms = useSelector((state: RootState) => state.filteredFilms.value);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // Используем моковые данные вместо API-запроса
  //   dispatch(setFilms(mockFilms));
  //   dispatch(setFilteredFilms(mockFilms));
  // }, [dispatch]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch("https://api.kinopoisk.dev/v1.4/movie?page=1&limit=15&selectFields=name&selectFields=enName&selectFields=year&selectFields=rating&selectFields=countries&selectFields=poster&selectFields=genres&selectFields=persons&selectFields=movieLength&selectFields=id&notNullFields=name&notNullFields=enName&notNullFields=poster.url&type=movie", {
          method: "GET",
          headers: {
            "X-API-KEY": "CY4H6JG-W8D4NK0-GF0BJZE-507QBP1"
          }
        })
          if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
          }
          
          const data = await response.json()
          dispatch(setFilms(data.docs))
          dispatch(setFilteredFilms(data.docs))
      } catch(error) {
        console.error("Ошибка загрузки данных:", error)
      } 
    }
    fetchFilms()

  }, [dispatch]);

  useEffect(() => {
    if (films.length > 0)
      console.log(filteredFilms)
  }, [filteredFilms])

  return (
    <div className="mt-[70px] w-full flex justify-center">
      {/* {filteredFilms.length === 0 ? (
        <div className="w-[80%] flex flex-col items-center">
          <Filter />
          <div className="ml-40">
            <ListFilms films={films} />
          </div>
        </div>
      ) : (
        <div className="w-[80%] flex flex-col items-center">
          <Filter />
          <div className="ml-40">
            <ListFilms films={filteredFilms} />
          </div>
        </div>
      )} */}
      <div className="w-[80%] flex flex-col items-center">
          <Filter />
          <div className="ml-40">
            <ListFilms films={films} />
          </div>
        </div>
    </div>
  );
};

export default MainPage;
