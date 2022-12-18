const express = require('express');
const router = express.Router();

router.get('/cart', async (req, res) => {
    res.send('Cart');
}); 

module.exports = router;