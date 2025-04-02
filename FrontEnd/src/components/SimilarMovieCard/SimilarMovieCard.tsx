import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface similarMovieCardProps {
    posterUrl: string,
    name: string,
}

const SimilarMovieCard: React.FC<similarMovieCardProps> = ({name, posterUrl}) => {
  return (
    <div >
        <Card className="w-[120px] h-[auto]">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={posterUrl}
                />
                <CardContent >
                    <Typography className='text-center' gutterBottom sx={{ fontSize: '15px' }} component="div">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  );
};

export default SimilarMovieCard;