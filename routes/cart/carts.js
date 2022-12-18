const express = require('express');
const router = express.Router();

router.post('/cart/movies', async (req, res) => {
    console.log(`${req.body.imdbID} - ${req.body.price}`);
    res.send('Movie added to cart')
}); 

module.exports = router;