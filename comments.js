// Create web server
const express = require('express');
const app = express();

// Create a comments object
const comments = {};

// Create a comment counter
let commentCounter = 0;

// Create a route that returns all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a route that returns a single comment
app.get('/comments/:id', (req, res) => {
    res.json(comments[req.params.id]);
});

// Create a route that adds a comment
app.post('/comments', (req, res) => {
    comments[commentCounter] = req.body;
    commentCounter++;
    res.json({ commentCounter: commentCounter });
});

// Create a route that updates a comment
app.put('/comments/:id', (req, res) => {
    comments[req.params.id] = req.body;
    res.json(comments[req.params.id]);
});

// Create a route that deletes a comment
app.delete('/comments/:id', (req, res) => {
    delete comments[req.params.id];
    res.json({ commentCounter: commentCounter });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started');
});