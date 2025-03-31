const express = require('express')
const moviesRouter = require('./routes/moviesRoutes')
const favouritesMoviesRouter = require('./routes/favouritesMoviesRoutes')
const personsRouter = require('./routes/personsRoutes')
const videosRouter = require('./routes/videosRoutes')
const imagesRouter = require('./routes/imagesRoutes')
const cors = require('cors')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

app.use('/api/movies', moviesRouter);  
app.use('/api/persons', personsRouter); 
app.use('/api/favouritesmovies', favouritesMoviesRouter); 
app.use('/api/videos', videosRouter); 
app.use('/api/images', imagesRouter); 


app.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}`));
