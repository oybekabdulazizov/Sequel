const express = require('express');
const router = express.Router();
const cartsRepo = require('../../repositories/carts');
const moviesRepo = require('../../repositories/movies');
const cartShowTemplate = require('../../views/cart/cart');


router.post('/cart/movies', async (req, res) => {
    let cart;
    if (!req.session.cartId) {
        cart = await cartsRepo.create({ items: [] });
        req.session.cartId = cart.id;
    } else {
        cart = await cartsRepo.getOne(req.session.cartId);
    }
    
    const existingItem = cart.items.find(item => item.imdbID === req.body.imdbID);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.items.push({ imdbID: req.body.imdbID, quantity: 1 });
    }
    await cartsRepo.update(cart.id, {
        items: cart.items
    });

    res.redirect('/cart');
}); 


router.get('/cart', async (req, res) => {
    if (!req.session.cartId) {
        return res.redirect('/movies');
    } 

    const cart = await cartsRepo.getOne(req.session.cartId);

    for (let item of cart.items) {
        const movie = await moviesRepo.getOne(item.imdbID);
        item.movie = movie;
    }

    res.send(cartShowTemplate({ req, items: cart.items }));
});


router.post('/cart/movies/delete', async (req, res) => {
    console.log(req.body);
    if (!req.body.imdbID) {
        return res.send('Movie not found.');
    }

    const cart = await cartsRepo.getOne(req.session.cartId);
    const items = cart.items.filter(item => item.imdbID !== req.body.imdbID);

    await cartsRepo.update(cart.id, { items });

    res.redirect('/cart');
});


module.exports = router;