const express = require('express');
const router = express.Router();

router.get('/movies', (req, res) => {
    console.log("This is the movie router.");
    res.send();
});

module.exports = router;