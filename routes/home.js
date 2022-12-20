const express = require('express');
const router = express.Router();

const home = require('../views/home'); 
const about = require('../views/about');


router.get('/', async (req, res) => {
    res.send(home());
});

router.get('/about', async (req, res) => {
    res.send(about({ req }));
});

module.exports = router;