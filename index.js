const express = require('express');
const axios = require('axios');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/auth/auth');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
    keys: ['sequel_movie_commerce_20221000']
}));
app.use(authRouter);

app.get('/', async (req, res) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: "891d1ad5",
            s: "dark"
        }
    });
    const data = response.data.Search;
    const renderedMovies = data.map(movie => {
        return `
            <div>${movie.Title}</div>
        `;
    }).join('');

    res.send(renderedMovies);
});


app.listen('3002', () => {
    console.log('Listening...');
});