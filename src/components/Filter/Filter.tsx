import { useState } from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { setClearFilter, setYears } from "../../store/FilmsSlice";
import { RootState } from "@/store/store";

const Filter: React.FC = () => {
  const [countryTitle, setCountryTitle] = useState<string>("Все страны");
  const [genreTitle, setGenreTitle] = useState<string>("Все жанры");
  const [valueFrom, setValueFrom] = useState<number | "">("");
  const [valueTo, setValueTo] = useState<number | "">("");
  const [errorFrom, setErrorFrom] = useState<boolean>(false);
  const [errorTo, setErrorTo] = useState<boolean>(false);
  const dispatch = useDispatch();
  const filteredFilms = useSelector((state: RootState) => state.filteredFilms.value);

  // Состояние для отслеживания, какой список открыт
  const [isOpen, setIsOpen] = useState<{ countries: boolean; genres: boolean }>({
    countries: false,
    genres: false,
  });

  const onChangeFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= 4) {
      setValueFrom(newValue);
    }
    setErrorFrom(false);
  };

  const onChangeTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
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

    if (!hasError) {
      setCountryTitle("Все страны")
      setGenreTitle("Все жанры")
      setIsOpen({countries: false, genres: false})
      const YearsFromAndTo = { from: valueFrom, to: valueTo };
      dispatch(setYears(YearsFromAndTo));
      console.log(filteredFilms);
    }
  };

  // Функция для переключения открытия/закрытия меню
  const toggleDropdown = (type: "countries" | "genres") => {
    setIsOpen((prevState) => ({
      countries: type === "countries" ? !prevState.countries : false,
      genres: type === "genres" ? !prevState.genres : false,
    }));
  };

  const clearFilter = () => {
    setIsOpen({countries: false, genres: false})
    setValueFrom("")
    setValueTo("")
    dispatch(setClearFilter())
    setCountryTitle("Все страны")
    setGenreTitle("Все жанры")
  }

  return (
    <div className="w-[10%] fixed left-40">
      <div className="mb-2">
        <h1>Страны</h1>
        <DropDownMenu
          type="Страны"
          title={countryTitle}
          setTitle={setCountryTitle}
          buttons={["Все страны", "Канада", "США", "Германия", "Болгария", "Австрия", "Венгрия"]}
          resetOtherFilter={() => setGenreTitle("Все жанры")}
          isOpen={isOpen.countries}
          toggleDropdown={() => toggleDropdown("countries")}
          setValueFrom={setValueFrom}
          setValueTo={setValueTo}
        />
      </div>

      <div className="mb-2">
        <h1>Жанры</h1>
        <DropDownMenu
          title={genreTitle}
          setTitle={setGenreTitle}
          buttons={["Все жанры", "драма", "мелодрама", "мюзикл", "комедия"]}
          resetOtherFilter={() => setCountryTitle("Все страны")}
          isOpen={isOpen.genres}
          toggleDropdown={() => toggleDropdown("genres")}
          setValueFrom={setValueFrom}
          setValueTo={setValueTo}
        />
      </div>

      <div className="border-2 border-gray-500 p-2">
        <h1>Годы</h1>
        <div className="flex gap-1">
          <TextField
            type="number"
            error={errorFrom}
            value={valueFrom}
            onChange={onChangeFrom}
            placeholder="от"
            size="small"
            sx={{
              "& input": { fontSize: "12px", padding: 1 },
              "& .MuiInputBase-root": { padding: 0 },
            }}
          />
          <TextField
            type="number"
            error={errorTo}
            value={valueTo}
            onChange={onChangeTo}
            placeholder="до"
            size="small"
            sx={{
              "& input": { fontSize: "12px", padding: 1 },
              "& .MuiInputBase-root": { padding: 0 },
            }}
          />
        </div>
        <Button className="!text-black mt-2" size="small" onClick={filterByYears}>
          Фильтр по годам
        </Button>
      </div>

      <Button onClick={clearFilter}>Очистить фильтры</Button>
    </div>
  );
};

export default Filter;
