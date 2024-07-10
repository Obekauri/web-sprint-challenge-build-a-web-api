const express = require('express');
const { logger: projectsLogger } = require('./projects/projects-middleware');
const { logger: actionsLogger } = require('./actions/actions-middlware');
const server = express();
const projectsRouter = require('./projects/projects-router');
const actionsRouter = require('./actions/actions-router');

server.use(express.json());

// Use middleware
server.use(projectsLogger);
server.use(actionsLogger);

// Use routers
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

// Handle unknown routes
server.use('*', (req, res) => {
    res.status(404).json({
        message: 'Not found, try again'
    });
});

module.exports = server;
