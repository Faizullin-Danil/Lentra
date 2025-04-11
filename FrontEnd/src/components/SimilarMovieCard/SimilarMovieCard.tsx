import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

interface similarMovieCardProps {
    posterUrl: string,
    name: string,
}

const SimilarMovieCard: React.FC<similarMovieCardProps> = ({name, posterUrl}) => {

    return (
        <div>
            <Card className="w-[140px]" elevation={0}>
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
