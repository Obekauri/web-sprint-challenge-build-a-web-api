const express = require('express');
const server = express();

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!


const { logger } = require('../api/projects/projects-middleware') // This need to change
const usersRouter = require('../api/projects/projects-router') // This need to change

server.use(express.json())

server.use(logger) // This need to change

server.use('/api/users', usersRouter) // This need to change

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'Not found'
    })
})

module.exports = server

module.exports = server;
