const express = require('express')
const moviesRouter = require('./routes/movies.routes')
const cors = require('cors')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

app.use('/api', moviesRouter)

app.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}`));
