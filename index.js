const express = require('express');
const axios = require('axios');
const cookieSession = require('cookie-session');

const usersRepo = require('./repositories/users');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
    keys: ['sequel_movie_commerce_20221000']
}));

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

app.get('/signup', (req, res) => {
    res.send(`
        <form method="POST">
            <h2>Currently signed-in user id: ${req.session.userId}</h2>
            <input name="email" placeholder="Email address" />
            <input name="password" placeholder="password" />
            <input name="passwordConfirmation" placeholder="password confirmation" />
            <button>Sign Up!</button>
        </form>
    `);
});

app.post('/signup', async (req, res, next) => {
    const { email, password, passwordConfirmation } = req.body;
    const existingUser = await usersRepo.getOneBy({ email });

    if (existingUser) {
        return res.send('Email in use.');
    }

    if (password !== passwordConfirmation) {
        return res.send('The passwords must match.');
    }

    const newUser = await usersRepo.create({ email, password });
    req.session.userId = newUser.id;
    
    res.send("Account created.");
});


app.get('/signin', (req, res) => {
    res.send(`
        <form method="POST">
            <h2>Currently signed-in user id: ${req.session.userId}</h2>
            <input name="email" placeholder="Email address" />
            <input name="password" placeholder="password" />
            <button>Sign In!</button>
        </form>
    `);
});


app.get('/signout', (req, res) => {
    req.session = null;
    res.send('Signed out.');
});


app.listen('3002', () => {
    console.log('Listening...');
});