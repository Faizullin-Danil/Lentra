import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCountry, setGenres, setClearFilter } from "../../store/FilmsSlice";
import { setFavouriteCountry, setFavouriteGenres, setFavouriteClearFilter } from "../../store/FavouriteFilmsSlice";
import { RootState } from '@/store/store';
import Modal from '../Modal/Modal';

interface DropDownMenuProps {
  whichPage: string;
  title: string;
  buttons: string[];
  type?: string;
  resetOtherFilter: () => void;
  setTitle: (title: string) => void;
  isOpen: boolean;
  toggleDropdown: () => void; 
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
  isOpen,
  toggleDropdown,
  setValueFrom,
  setValueTo
}) => {
  const favoutitesFilms = useSelector((state: RootState) => state.favouritesFilms.value)
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleFilter = (text: string) => {
    console.log(text);
    setTitle(text);
    resetOtherFilter();
    const copyFavoutitesFilms = favoutitesFilms;

    if (whichPage === "Главная страница") {
      if (text === "Все страны" || text === "Все жанры") {
        dispatch(setClearFilter());
      } else if (type === "Страны") {
        dispatch(setCountry(text));
      } else {
        dispatch(setGenres(text));
      }
    } else if (whichPage === "Страница избранных") {
      if (text === "Все страны" || text === "Все жанры") {
        dispatch(setFavouriteClearFilter());
      } else if (type === "Страны") {
        const isCountryExist = copyFavoutitesFilms.some(film =>
          film.countries.some(country => country.name === text)
        );
        if (isCountryExist) {
          dispatch(setFavouriteCountry(text));
        } else {
          setModalMessage(`В избранных фильмах нет фильмов из ${text}`);
          setOpenModal(true); 
        }
      } else {
        const isGenresExist = copyFavoutitesFilms.some(film =>
          film.genres.some(genre => genre.name === text)
        );
        if (isGenresExist) {
          dispatch(setFavouriteGenres(text));
        } else {
          setModalMessage(`В избранных фильмах нет жанра ${text}`);
          setOpenModal(true); 
        }
      }
    }
    setValueFrom("");
    setValueTo("");
  };

  return (
    <div>
      <Accordion expanded={isOpen} onChange={toggleDropdown}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography component="span">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {buttons.map((buttonText) => (
            <Button key={buttonText} onClick={() => handleFilter(buttonText)}>
              {buttonText}
            </Button>
          ))}
        </AccordionDetails>
      </Accordion>

      {openModal && (
        <Modal
          message={modalMessage}
          onClose={() => setOpenModal(false)}
        />
      )}
    </div>
  );
};

export default DropDownMenu;
