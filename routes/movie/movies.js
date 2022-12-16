const express = require('express');
const router = express.Router();

const moviesRepo = require('../../repositories/movies');
const moviesIndexTemplate = require('../../views/movie/index');
const movieDetailsTemplate = require('../../views/movie/details');

router.get('/movies', async (req, res) => {
    const movies = await moviesRepo.getAll();
    res.send(moviesIndexTemplate({ req, movies }));
});

router.get('/movies/:imdbID/details', async (req, res) => {
    const movie = await moviesRepo.getOne(req.params.imdbID);
    if (!movie) {
        return res.send("404: Movie not found!")
    } 

    res.send(movieDetailsTemplate({ req, movie }));
})

module.exports = router;