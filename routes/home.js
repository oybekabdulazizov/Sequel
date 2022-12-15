const express = require('express');
const router = express.Router();

const home = require('../views/home'); 


router.get('/', async (req, res) => {
    res.send(home());
});

module.exports = router;