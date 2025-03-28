import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

interface ActorCardProps {
  name_ru: string;
  poster_url: string;
}

const ActorCard: React.FC<ActorCardProps> = ({ name_ru, poster_url }) => {
  return (
    <div>
        <Card className="w-60 h-82 flex flex-col justify-between">
            <CardActionArea>
                <CardMedia
                component="img"
                className="h-64 object-cover"
                image={poster_url}
                alt={name_ru}
                />
                <CardContent className="text-center h-12">
                <Typography variant="h6" className="text-base">
                    {name_ru}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
    
  );
};

export default ActorCard;
