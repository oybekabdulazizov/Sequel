const express = require('express');
const router = express.Router();

const moviesRepo = require('../../repositories/movies');

router.get('/movies', async (req, res) => {
    const movie = await moviesRepo.getOne('tt0848228');
    //console.log(movie);
    res.send(movie);
});

module.exports = router;