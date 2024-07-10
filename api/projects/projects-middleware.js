const Project = require('../projects/projects-model')

function logger(req, res, next) {
    console.log(`${req.method} request to ${req.url}`);
    next();
}

async function validateId(req, res, next){
    try {
        const projectId = await Project.get(req.params.id)
        if(!projectId){
            res.status(404).json({
                message: 'Project id not found'
            })
        }else{
            req.project = projectId
            next()
        }
    }catch (err) {
        res.status(500).json({
            message: 'Something went wrong',
            err: err.message,
            stack: err.stack
        })
    }
}

function validateName(req, res, next) {
    const { name } = req.body
    if(!name || !name.trim()){
      res.status(400).json({
        message: 'missing required name'
      })
    }else{
      req.name = name.trim()
      next()
    }
}
  
function validateDescription(req, res, next) {
    const { description } = req.body
    if(!description || !description.trim()){
      res.status(400).json({
        message: "missing required text field"
      })
    }else{
      req.text = description.trim()
      next()
    }
}

module.exports = {
    logger,
    validateId,
    validateName,
    validateDescription,
};
