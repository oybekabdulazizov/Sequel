const express = require('express');
const router = express.Router();

const signupTemplate = require('../../views/auth/signup');
const signinTemplate = require('../../views/auth/signin');
const usersRepo = require('../../repositories/users');

router.get('/signup', (req, res) => {
    res.send(signupTemplate({ req }));
});


router.post('/signup', async (req, res, next) => {
    const { email, password, passwordConfirmation } = req.body;
    const existingUser = await usersRepo.getOneBy({ email });

    if (existingUser) {
        return res.send('Email in use.');
    }

    if (password !== passwordConfirmation) {
        return res.send('The passwords must match.');
    }

    const newUser = await usersRepo.create({ email, password });
    req.session.userId = newUser.id;

    res.send("Account created.");
});


router.get('/signin', (req, res) => {
    res.send(signinTemplate({ req }));
});


router.post('/signin', async (req, res, next) => {
    const { email, password } = req.body;
    const existingUser = await usersRepo.getOneBy({ email });
    console.log(existingUser);
    if (!existingUser) {
        return res.send('Email does not exist.');
    }

    const validPassword = await usersRepo.comparePasswords(existingUser.password, password);

    if (!validPassword) {
        return res.send('Incorrect password.');
    }

    req.session.userId = existingUser.id;

    res.send("You are signed in.");
});


router.get('/signout', (req, res) => {
    req.session = null;
    res.send('You are signed out.');
});


module.exports = router;