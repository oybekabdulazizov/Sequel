const express = require('express');
const router = express.Router();
const searchFormTemplate = require('../views/search');
const { handleErrors } = require('./auth/middleware');
const { requireSearchterm } = require('./auth/validators');


router.get('/search', async (req, res) => {
    res.send(searchFormTemplate({ req }));
});


router.post('/search',
    [requireSearchterm],
    handleErrors(searchFormTemplate),
    async (req, res, next) => {
    
});

module.exports = router;