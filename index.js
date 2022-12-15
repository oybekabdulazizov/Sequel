const express = require('express');
const axios = require('axios');
const cookieSession = require('cookie-session');

const authRouter = require('./routes/auth/auth');
const moviesRouter = require('./routes/movie/movies');
const homepageRouter = require('./routes/home');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
    keys: ['sequel_movie_commerce_20221000']
}));
app.use(authRouter);
app.use(moviesRouter);
app.use(homepageRouter);


app.listen('3002', () => {
    console.log('Listening...');
});