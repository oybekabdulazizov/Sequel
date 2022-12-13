const express = require('express');
const router = express.Router();

const moviesRepo = require('../../repositories/movies');
const moviesIndexTemplate = require('../../views/movie/indexmovie');

router.get('/movies', async (req, res) => {
    const movies = await moviesRepo.getAll();
    res.send(moviesIndexTemplate({ movies }));
});

module.exports = router;