import { useState } from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { setClearFilter, setYears } from "../../store/FilmsSlice";
import { setFavouriteClearFilter, setFavouriteYears } from "../../store/FavouriteFilmsSlice";
import { openAlertWithTimeout } from "../../store/AlertSlice"
import { RootState } from "@/store/store";

interface FilterProps {
  whichPage: string;
}

const Filter: React.FC<FilterProps> = ({ whichPage }) => {
  const [countryTitle, setCountryTitle] = useState<string>("Все страны");
  const [genreTitle, setGenreTitle] = useState<string>("Все жанры");
  const [valueFrom, setValueFrom] = useState<string>("");
  const [valueTo, setValueTo] = useState<string>("");
  const [errorFrom, setErrorFrom] = useState<boolean>(false);
  const [errorTo, setErrorTo] = useState<boolean>(false);
  const dispatch = useDispatch();
  const allFavouritesFilms = useSelector((state: RootState) => state.favouritesFilms.allFavouritesFilms);
  const allFilms = useSelector((state: RootState) => state.films.allFilms);

  const onChangeFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/\D/g, "");
    if (newValue.length <= 4) {
      setValueFrom(newValue);
    }
    setErrorFrom(false);
  };

  const onChangeTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/\D/g, "");
    if (newValue.length <= 4) {
      setValueTo(newValue);
    }
    setErrorTo(false);
  };

  const filterByYears = () => {
    let hasError = false;

    if (valueFrom === "") {
      setErrorFrom(true);
      hasError = true;
    }
    if (valueTo === "") {
      setErrorTo(true);
      hasError = true;
    }

    const isFilmsYears = allFilms.filter(film => (film.year >= valueFrom) && (film.year <= valueTo))
    const isFavouritesFilmsYears = allFavouritesFilms.filter(film => (film.year >= valueFrom) && (film.year <= valueTo))
    
    if (!hasError) {
      setCountryTitle("Все страны");
      setGenreTitle("Все жанры");
      const YearsFromAndTo = { from: valueFrom, to: valueTo };
      if (whichPage === "Главная страница" && isFilmsYears.length !== 0) {
        dispatch(setYears(YearsFromAndTo));
      } else if (whichPage === "Страница избранных" && isFavouritesFilmsYears.length !== 0) {
        dispatch(setFavouriteYears(YearsFromAndTo));
      } else {
        dispatch(openAlertWithTimeout())
      }

    }
  };


  const clearFilter = () => {
    setValueFrom("");
    setValueTo("");
    if (whichPage === "Главная страница") {
      dispatch(setClearFilter());
    } else if (whichPage === "Страница избранных") {
      dispatch(setFavouriteClearFilter());
    }
    setCountryTitle("Все страны");
    setGenreTitle("Все жанры");
  };

  return (
    <div className="w-[14%] fixed left-40 mt-[27px]">
      <div className="mb-2">
        <DropDownMenu
          whichPage={whichPage}
          type="Страны"
          title={countryTitle}
          setTitle={setCountryTitle}
          buttons={["Все страны", "Канада", "США", "Германия", "Болгария", "Австрия", "Венгрия", "csscsc", "Россия"]}
          resetOtherFilter={() => setGenreTitle("Все жанры")}
          setValueFrom={setValueFrom}
          setValueTo={setValueTo}
        />
      </div>

      <div className="mb-2">
        <DropDownMenu
          whichPage={whichPage}
          title={genreTitle}
          type="Жанры"
          setTitle={setGenreTitle}
          buttons={["Все жанры", "драма", "мелодрама", "мюзикл", "комедия", "боевик", "фэнтези", "фантастика", "триллер", "ужасы"]}
          resetOtherFilter={() => setCountryTitle("Все страны")}
          setValueFrom={setValueFrom}
          setValueTo={setValueTo}
        />
      </div>

      <div className="border-2 border-gray-500 rounded-sm p-2">
        <h1 className="pb-2">Годы</h1>
        <div className="flex gap-1">
          <TextField
            type="text"
            error={errorFrom}
            value={valueFrom}
            onChange={onChangeFrom}
            placeholder="от"
            size="small"
            sx={{ "& input": { fontSize: "12px", padding: 1 }, "& .MuiInputBase-root": { padding: 0 } }}
          />
          <TextField
            type="text"
            error={errorTo}
            value={valueTo}
            onChange={onChangeTo}
            placeholder="до"
            size="small"
            sx={{ "& input": { fontSize: "12px", padding: 1 }, "& .MuiInputBase-root": { padding: 0 } }}
          />
        </div>
        <Button className="w-full !text-black !pt-3" size="small" onClick={filterByYears}>
          Фильтр по годам
        </Button>
      </div>
      <Button className="w-full !mt-2" onClick={clearFilter}>Очистить фильтры</Button>
    </div>
  );
};

export default Filter;
