import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCountry, setGenres, setClearFilter } from "../../store/FilmsSlice";
import { setFavouriteCountry, setFavouriteGenres, setFavouriteClearFilter } from "../../store/FavouriteFilmsSlice";
import { RootState } from "@/store/store";
import { openAlertWithTimeout } from "../../store/AlertSlice";

interface DropDownMenuProps {
  whichPage: string;
  title: string;
  buttons: string[];
  type?: string;
  resetOtherFilter: () => void;
  setTitle: (title: string) => void;
  setValueFrom: (value: string) => void; 
  setValueTo: (value: string) => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  whichPage,
  title,
  buttons,
  type,
  resetOtherFilter,
  setTitle,
  setValueFrom,
  setValueTo
}) => {
  const favouritesFilms = useSelector((state: RootState) => state.favouritesFilms.value);
  const dispatch = useDispatch();

  const handleFilter = (event: React.ChangeEvent<{}>, value: string | null) => {
    if (!value) return;

    setTitle(value);
    resetOtherFilter();

    if (whichPage === "Главная страница") {
      if (value === "Все страны" || value === "Все жанры") {
        dispatch(setClearFilter());
      } else if (type === "Страны") {
        dispatch(setCountry(value));
      } else {
        dispatch(setGenres(value));
      }
    } else if (whichPage === "Страница избранных") {
      if (value === "Все страны" || value === "Все жанры") {
        dispatch(setFavouriteClearFilter());
      } else if (type === "Страны") {
        const isCountryExist = favouritesFilms.some(film =>
          film.countries.some(country => country.name === value)
        );
        if (isCountryExist) {
          dispatch(setFavouriteCountry(value));
        } else {
          dispatch(openAlertWithTimeout());
        }
      } else {
        const isGenresExist = favouritesFilms.some(film =>
          film.genres.some(genre => genre.name === value)
        );
        if (isGenresExist) {
          dispatch(setFavouriteGenres(value));
        } else {
          dispatch(openAlertWithTimeout());
        }
      }
    }
    setValueFrom("");
    setValueTo("");
  };

  return (
    <Autocomplete
      disablePortal
      options={buttons}
      value={title}
      onChange={handleFilter}
      renderInput={(params) => <TextField {...params} label={type || "Выберите"} />}
    />
  );
};

export default DropDownMenu;
