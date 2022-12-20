const express = require('express');
const router = express.Router();
const { handleErrors } = require('../auth/middleware');
const { requireSearchterm } = require('../auth/validators');
const moviesRepo = require('../../repositories/movies');
const searchFormTemplate = require('../../views/search/searchForm');
const searchIndex = require('../../views/search/searchIndex');


router.get('/search', async (req, res) => {
    res.send(searchFormTemplate({ req }));
});


router.post('/search',
    [requireSearchterm],
    handleErrors(searchFormTemplate),
    async (req, res) => {
    
    const { searchterm } = req.body;
    const allMovies = await moviesRepo.getAll();
    const searchtermWords = searchterm.split(' ');
    let searchResult = [];
    for(let movie of allMovies) {
        for (let word of searchtermWords) {
            if (movie.Title.toLowerCase().includes(word)) {
                searchResult.push(movie);
            }
        }
    }

    res.send(searchIndex({ req, searchResult }));
});

module.exports = router;