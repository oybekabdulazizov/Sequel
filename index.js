const express = require('express');
const axios = require('axios');
const cookieSession = require('cookie-session');
const fs = require('fs');

const authRouter = require('./routes/auth/auth');
const moviesRouter = require('./routes/movie/movies');
const homepageRouter = require('./routes/home');
const cartsRouter = require('./routes/cart/carts');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
    keys: ['sequel_movie_commerce_20221000']
}));
app.use(authRouter);
app.use(moviesRouter);
app.use(homepageRouter);
app.use(cartsRouter);


app.get('/test', async (req, res) => {
    const movies = JSON.parse(await fs.promises.readFile('./data/movies.json', { encoding: 'utf8' }));
    let counter = 0;
    for (let movie of movies) {
        counter++;
        if (movie.BoxOffice === 'N/A' || !movie.BoxOffice) {
            movie.Price = 10;
        } else {
            let price = Math.ceil(Math.random() * (45 - 30) + 30);
            movie.Price = price;
        }
        console.log(`${movie.BoxOffice} - ${movie.Price}`);
    }
    console.log(`${counter} movies have been added Price attribute`);
    await fs.promises.writeFile('./data/movies.json', JSON.stringify(movies, null, 2));
});


app.listen('3002', () => {
    console.log('Listening...');
});