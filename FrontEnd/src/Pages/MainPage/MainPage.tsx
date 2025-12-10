import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import filmImage from "../../assets/johnny-depp.webp";
import serialImage from "../../assets/d52cd9034a701e2c5b38175786ed36b8.webp";

const MainPage = () => {
  return (
    <Box className="flex justify-center gap-4">
      <Link to="/films">
        <Card className="w-110">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={filmImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="text-center"
              >
                Все Фильмы
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>

      {/* <Link to="/serials">
        <Card className='w-110'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={serialImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='text-center'>
                Все сериалы
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link> */}
    </Box>
  );
};

export default MainPage;
