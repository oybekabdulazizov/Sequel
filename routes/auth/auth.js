const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');
const signupTemplate = require('../../views/auth/signup');
const signinTemplate = require('../../views/auth/signin');
const usersRepo = require('../../repositories/users');
const { requireEmail, 
        requirePassword, 
        requirePasswordConfirmation, 
        requireEmailExists, 
        requireValidPassword, } = require('./validators');

router.get('/signup', (req, res) => {
    res.send(signupTemplate({ req }));
});


router.post('/signup', [requireEmail, requirePassword, requirePasswordConfirmation], async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send(signupTemplate({ req, errors }));
    }

    const { email, password } = req.body;
    const newUser = await usersRepo.create({ email, password });
    req.session.userId = newUser.id;
    res.send("Account created.");
});


router.get('/signin', (req, res) => {
    res.send(signinTemplate({ req }));
});


router.post('/signin', [requireEmailExists, requireValidPassword], async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send(signinTemplate({ req, errors }));
    }

    const { email } = req.body;
    const user = await usersRepo.getOneBy({ email });
    req.session.userId = user.id;
    res.send("You are signed in.")
});


router.get('/signout', (req, res) => {
    req.session = null;
    res.send('You are signed out.');
});


module.exports = router;