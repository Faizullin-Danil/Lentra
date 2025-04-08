import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface similarMovieCardProps {
    posterUrl: string,
    name: string,
    kinopoiskId: number,  // Добавляем идентификатор фильма
}

const SimilarMovieCard: React.FC<similarMovieCardProps> = ({name, posterUrl, kinopoiskId}) => {
    const navigate = useNavigate();

    // console.log(kinopoiskId)

    const handleCardClick = () => {
        navigate(`/film/${kinopoiskId}`, { state: { kinopoisk_id: kinopoiskId } }); // Переход с передачей state
    };

    return (
        <div>
            <Card className="w-[140px]" elevation={0} onClick={handleCardClick}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={posterUrl}
                    />
                    <CardContent>
                        <Typography className='text-wrap' gutterBottom sx={{ fontSize: '15px' }} component="div">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default SimilarMovieCard;
