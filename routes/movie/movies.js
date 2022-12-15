const express = require('express');
const router = express.Router();

const moviesRepo = require('../../repositories/movies');
const moviesIndexTemplate = require('../../views/movie/index');

router.get('/movies', async (req, res) => {
    const movies = await moviesRepo.getAll();
    res.send(moviesIndexTemplate({ req, movies }));
});

module.exports = router;