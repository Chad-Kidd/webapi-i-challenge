// implement your API here
// import express from 'express' //es2015 Module Import
const express = require('express');

const db = require('./data/db.js')

const server = express();

server.use(express.json()); //tells express how to write json
// does not know how to do out of the box

    server.get('/', (req, res) => {
            res.send("It's alive!");
        })

    server.post('/api/users', (req, res) => {

    const userInfo = req.body;
    console.log('requst body', userInfo);
    
    db.insert(users)
        .then( users => {
            res.status(200).json(users)
        })
        .catch( error => {
            res.status(500).json({error: error, message: "error with user"})
        })
    })

    server.get('/api/users', (req, res) => {
        db.find(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            res.status(500).json({error: error, message: "ERROR getting users"})
        })
    })

    server.get('/api/users/:id', (req, res) => {
        
        db .findById()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(404).json({ error: err, message: "The user information could not be retrieved."})
        })
    })

    server.delete('/api/users/:id', (req, res) => {
       
        const userId = req.params.id; //req.params has the url parameters
        
        db.remove(userId)
        .then(deleted => {
            res.status(204).end(); //sends back a response to the client w/o sending data 
        })
        .catch(error => {
            res.status(404).json({ error: err, message: "The user with the specified ID does not exist." })
        })
    })

server.listen(5000, () => console.log('API running on port 5000')); 
