import { useState } from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setClearFilter, setYears } from "../../store/FilmsSlice";
import { setFavouriteClearFilter, setFavouriteYears } from "../../store/FavouriteFilmsSlice";
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
      setTimeout(() => setErrorFrom(false), 500)
      hasError = true;
    }
    if (valueTo === "") {
      setErrorTo(true);
      setTimeout(() => setErrorTo(false), 500)
      hasError = true;
    }

    const isFilmsYears = allFilms.filter(film => (film.year >= Number(valueFrom)) && (film.year <= Number(valueTo)));
    const isFavouritesFilmsYears = allFavouritesFilms.filter(film => (film.year >= Number(valueFrom)) && (film.year <= Number(valueTo)));

    if (!hasError) {
      setCountryTitle("Все страны");
      setGenreTitle("Все жанры");
      const YearsFromAndTo = { from: valueFrom, to: valueTo };
      if (whichPage === "Главная страница" && isFilmsYears.length !== 0) {
        dispatch(setYears(YearsFromAndTo));
      } else if (whichPage === "Страница избранных" && isFavouritesFilmsYears.length !== 0) {
        dispatch(setFavouriteYears(YearsFromAndTo));
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
    <Box sx={{ width: '14%', position: 'fixed', left: 180, mt: 4 }}>
      <Box mb={2}>
        <DropDownMenu
          whichPage={whichPage}
          type="Страны"
          title={countryTitle}
          setTitle={setCountryTitle}
          buttons={["Все страны", "Канада", "США", "Германия", "Болгария", "Австрия", "Венгрия", "Франция", "Россия", "СССР", "Корея Южная", "Великобритания"]}
          resetOtherFilter={() => setGenreTitle("Все жанры")}
          setValueFrom={setValueFrom}
          setValueTo={setValueTo}
        />
      </Box>

      <Box mb={2}>
        <DropDownMenu
          whichPage={whichPage}
          title={genreTitle}
          type="Жанры"
          setTitle={setGenreTitle}
          buttons={["Все жанры", "драма", "мелодрама", "мюзикл", "комедия", "боевик", "фэнтези", "фантастика", "триллер", "ужасы", "приключения", "мульфильм", "детский", "музыка", "документальный", "семейный", "короткометражка", "биография", "криминал"]}
          resetOtherFilter={() => setCountryTitle("Все страны")}
          setValueFrom={setValueFrom}
          setValueTo={setValueTo}
        />
      </Box>

      <Box border={2} borderColor="grey.600" borderRadius="4px" p={2}>
        <Typography>Годы</Typography>
        <Box display="flex" gap={1}>
          <TextField
            type="text"
            error={errorFrom}
            value={valueFrom}
            onChange={onChangeFrom}
            placeholder="от"
            size="small"
            sx={{
              '& input': { fontSize: '12px', padding: 1 },
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': { borderColor: 'black', border: 2 },
                '&.Mui-focused fieldset': { borderColor: 'black' },
                '&.Mui-error fieldset': { borderColor: errorFrom ? 'red' : 'black', borderWidth: errorFrom ? 2 : 1},
              },
            }}
          />
          <TextField
            type="text"
            error={errorTo}
            value={valueTo}
            onChange={onChangeTo}
            placeholder="до"
            size="small"
            variant="outlined"
            sx={{
              '& input': { fontSize: '12px', padding: 1 },
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': { borderColor: 'black' },
                '&.Mui-focused fieldset': { borderColor: 'black' },
                '&.Mui-error fieldset': { borderColor: errorTo ? 'red' : 'black', borderWidth: errorTo ? 2 : 1},
              },
            }}
          />
        </Box>
        <Button
          fullWidth
          sx={{ textTransform: 'none', mt: 1, color: 'black' }}
          onClick={filterByYears}
        >
          Фильтр по годам
        </Button>
      </Box>

      <Button
        fullWidth
        sx={{ textTransform: 'none', mt: 2, color: 'black' }}
        onClick={clearFilter}
      >
        Очистить
      </Button>
    </Box>
  );
};

export default Filter;
