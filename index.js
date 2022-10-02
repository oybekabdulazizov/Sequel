const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Hello world');
    res.send('Hello world!');
});

app.listen('3002', () => {
    console.log('Listening...');
});