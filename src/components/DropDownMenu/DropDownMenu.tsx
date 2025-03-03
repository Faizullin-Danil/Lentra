import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setCountry, setGenres, setClearFilter } from "../../store/FilmsSlice";
// import { setCountry, setGenres } from "../../store/FilteredFilmsSlice";


interface DropDownMenuProps {
  title: string;
  buttons: string[];
  type?: string;
  resetOtherFilter: () => void;
  setTitle: (title: string) => void; // Передаем функцию для обновления заголовка в родителе
  isOpen: boolean;
  toggleDropdown: () => void; // Функция для переключения состояния
  setValueFrom: (value: string | number | "") => void; 
  setValueTo: (value: string | number | "") => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({
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
  const dispatch = useDispatch();

  const handleFilter = (text: string) => {
    console.log(text);
    setTitle(text);
    resetOtherFilter();
  
    if (text === "Все страны" || text === "Все жанры") {
      dispatch(setClearFilter())
    } else if (type === "Страны") {
      dispatch(setCountry(text));
    } else {
      dispatch(setGenres(text));
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
    </div>
  );
};

export default DropDownMenu;
