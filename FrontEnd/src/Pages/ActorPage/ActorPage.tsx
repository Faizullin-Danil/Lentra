import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const ActorPage = () => {
  const location = useLocation();
  const actor = location.state;

  const pluralizeYears = (n?: number) => {
    if (n === undefined) return "";
    if (n % 100 >= 11 && n % 100 <= 14) return "лет";
    const lastDigit = n % 10;
    if (lastDigit === 1) return "год";
    if (lastDigit >= 2 && lastDigit <= 4) return "года";
    return "лет";
  };

  return (
    <Box className="flex flex-col items-center">
      <Box className="w-[80%] flex gap-10">
        <Box className="w-[25%] flex flex-col gap-5">
          <img src={actor?.photo} className="w-80 h-120 object-cover" />
        </Box>
        <Box className="w-[50%] flex flex-col space-y-2 gap-3">
          <Typography className="flex items-center gap-4 text-2xl font-bold">
            {actor?.nameRu || actor?.nameEn}
          </Typography>
          <Typography fontSize={20} fontWeight={"bold"}>
            Об актёре
          </Typography>
          <Typography>Профессия: {actor?.profession}</Typography>
          <Typography>
            Дата рождения: {actor?.birthday}
            {`, ${actor?.age} ${pluralizeYears(actor?.age)}`}
          </Typography>
          <Typography>Место рождения: {actor?.birthplace}</Typography>
          <Typography>Награды: {actor?.hasAwards}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ActorPage;
