const express = require('express')
const moviesRouter = require('./routes/moviesRoutes')
const favouritesMoviesRouter = require('./routes/favouritesMoviesRoutes')
const personsRouter = require('./routes/personsRoutes')
const videosRouter = require('./routes/videosRoutes')
const imagesRouter = require('./routes/imagesRoutes')
const similarMoviesRouter = require('./routes/similarMoviesRoutes')
const actorsRouter = require('./routes/actorsRoutes')
const cors = require('cors')
require('dotenv').config();

const app = express();

const PORT = process.env.PORT

app.use(cors())
app.use(express.json());

app.use('/api/movies', moviesRouter);
app.use('/api/persons', personsRouter);
app.use('/api/favouritesmovies', favouritesMoviesRouter);
app.use('/api/videos', videosRouter);
app.use('/api/images', imagesRouter);
app.use('/api/similarmovies', similarMoviesRouter);
app.use('/api/actor', actorsRouter);


app.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}`));
