const express = require('express');
const router = express.Router();
const cartsRepo = require('../../repositories/carts');


router.post('/cart/movies', async (req, res) => {
    let cart;
    if (!req.session.cartId) {
        cart = await cartsRepo.create({ items: [] });
        req.session.cartId = cart.id;
    } else {
        cart = await cartsRepo.getOne(req.session.cartId);
    }
    
    console.log(cart);
    res.send("Product added to the cart");
}); 


module.exports = router;