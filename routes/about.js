const express = require('express');
const router = express.Router();
const aboutView = require('../views/about');


router.get('/about', async (req, res) => {
    res.send(aboutView({ req }));
});


module.exports = router;