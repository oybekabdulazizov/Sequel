const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.urlencoded({ extended: true }));

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
            <input name="email" placeholder="Email address" />
            <input name="password" placeholder="password" />
            <input name="passwordConfirmation" placeholder="password confirmation" />
            <button>Sign Up!</button>
        </form>
    `);
});

app.post('/signup', (req, res, next) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen('3002', () => {
    console.log('Listening...');
});