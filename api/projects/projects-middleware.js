const User = require('../projects/projects-model')	// T I P: use - ctrl + space before typing

function logger(req, res, next) {
    // My code here
    
    console.log('logger is working') // Check if it's working
    next()
}


function validateUserId(req, res, next) {  // Possible async function
    // My code here
    
    console.log('validateUserId is working') // Check if it's working
    next()
}

function validateUser(req, res, next) {  // Possible async function
    // My code here
    
    console.log('validateUser is working') // Check if it's working
    next()
}

function validatePost(req, res, next) {  // Possible async function
    // My code here
    
    console.log('validatePost is working') // Check if it's working
    next()
}


module.exports = {
    logger,
    validateUserId,
    validateUser,
    validatePost
}

