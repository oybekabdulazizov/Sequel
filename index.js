const express = require('express');
const axios = require('axios');

const app = express();

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