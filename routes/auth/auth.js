const express = require('express');
const router = express.Router();

const { handleErrors } = require('./middleware');
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


router.post('/signup', 
    [requireEmail, requirePassword, requirePasswordConfirmation], 
    handleErrors(signupTemplate),
    async (req, res, next) => {

    const { email, password } = req.body;
    const newUser = await usersRepo.create({ email, password });
    req.session.userId = newUser.id;
    res.redirect("/");
});


router.get('/signin', (req, res) => {
    res.send(signinTemplate({ req }));
});


router.post('/signin', 
    [requireEmailExists, requireValidPassword], 
    handleErrors(signinTemplate),
    async (req, res, next) => {

    const { email } = req.body;
    const user = await usersRepo.getOneBy({ email });
    req.session.userId = user.id;
    res.redirect("/");
});


router.get('/signout', (req, res) => {
    req.session = null;
    res.redirect('/signin');
});


module.exports = router;