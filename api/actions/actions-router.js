const express = require('express');
const router = express.Router();

const Actions = require('./actions-model')
const {
    validateActionId,
    validateActionDescription,
    validateActionNotes,
    validateProjectId
} = require('./actions-middlware')

// Define your action routes here
router.get('/', (req, res, next) => {
    Actions.get()
        .then(getActions => {
            res.json(getActions)
        })
        .catch(next)
});

router.get('/:id', validateActionId, (req, res, next) => {
    Actions.get(req.params.id)
        .then(getActionById => {
            res.json(getActionById)
        })
        .catch(next)
})

router.post('/', validateActionId, validateActionDescription, validateActionNotes, validateProjectId, (req, res, next) => {
    Actions.insert(req.body)
        .then(insertPost => {
            res.status(201).json(insertPost)
        })
        .catch(next)
})

router.put('/:id', validateActionId, validateActionDescription, validateActionNotes, validateProjectId, (req, res, next) => {
    Actions.update(req.params.id, req.body)
        .then(updatedUser => {
            res.status(200).json(updatedUser)
            next()
        })
        .catch(next)
})

router.delete('/:id', validateActionId, (req, res, next) => {
    Actions.remove(req.params.id)
        .then(() => {
            res.status(200).json(req.project)
        })
        .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: 'Something wrong inside Action raouter',
        err: err.message,
        stack: err.stack
    })
})

module.exports = router;
