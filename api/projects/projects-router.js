const express = require('express');
const router = express.Router();

const Project = require('../projects/projects-model')

const {
    validateId,
    validateName,
    validateDescription,
} = require('./projects-middleware')

router.get('/', (req, res, next) => {
    Project.get()
        .then(listOfprojects => {
            res.json(listOfprojects)
        })
        .catch(next)
})

router.get('/:id', validateId, (req, res, next) => {
    Project.get(req.params.id)
        .then(project => {
            res.json(project)
        })
        .catch(next)
})

router.post('/', validateName, validateDescription, (req, res, next) => {
    Project.insert(req.body)
        .then(userName => {
        res.status(201).json(userName)
        })
        .catch(next)
})

router.put('/:id', validateId, validateName, validateDescription, (req, res, next) => { // Problem about 400 status
    Project.update(req.params.id, req.body)
        .then(updatedUser => {
            res.status(200).json(updatedUser)
            next()
        })
        .catch(next)
})

router.delete('/:id', validateId, (req, res, next) => {
    Project.remove(req.params.id)
        .then(() => {
            res.status(200).json(req.project)
        })
        .catch(next)
})

router.get('/:id/actions', validateId, (req, res, next) => {
    Project.getProjectActions(req.params.id)
      .then(getPosts => {
        res.json(getPosts)
      })
      .catch(next)
  });


router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: 'Something wrong inside routers',
      err: err.message,
      stack: err.stack,
    })
  })

module.exports = router;
