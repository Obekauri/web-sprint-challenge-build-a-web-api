const express = require('express')
const {
    validateUserId
} = require('../projects/projects-middleware') 	//  Use  -  ctrl + space before typing

const router = express.Router();

router.get('/api/projects', (req, res) => {
    // My code here

})

router.get('/api/projects/:id', validateUserId, (req, res) => {
    // My code here

})

router.post('/api/projects',  (req, res) => {
    // My code here

})

router.put('/api/projects/:id', validateUserId, (req, res) => {
    // My code here

})

router.delete('/api/projects/:id', validateUserId, (req, res) => {
    // My code here

})

router.get('/api/projects/:id/actions', validateUserId, (req, res) => {
    // My code here

})

module.exports = router; // Those data will be received by server.js
