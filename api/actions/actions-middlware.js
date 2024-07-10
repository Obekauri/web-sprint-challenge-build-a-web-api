const Actions = require('./actions-model')

function logger(req, res, next) {
    console.log(`${req.method} request to ${req.url}`);
    next();
}

async function validateActionId(req, res, next){
    try {
        const actionId = await Actions.get(req.params.id)
        if(!actionId){
            res.status(404).json({
                message: 'Project id not found'
            })
        }else{
            req.project = actionId
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

function validateProjectId(req, res, next){
    const { project_id } = req.body
    if(!project_id){
        res.status(400).json({
            message: 'Required field is missing'
        })
    }else{
        req.project_id = project_id
        next()
    }
}

function validateActionDescription(req, res, next){
    const { description } = req.body
    if(!description || !description.trim()){
        res.status(400).json({
            message: 'Required field is missing'
        })
    }else{
        req.description = description
        next()
    }
}

function validateActionNotes(req, res, next){
    const { notes } = req.body
    if(!notes || !notes.trim()){
        res.status(400).json({
            message: 'Required field is missing'
        })
    }else{
        req.notes = notes
        next()
    }
}



/** function validateCompleted(req, res, next){
    const { completed } = req.body
    if(!completed){
        res.status(400).json({
            message: 'Completed part is missing'
        })
    }
    else{
        req.completed = completed
        next()
    }
}**/

module.exports = {
    logger,
    validateActionId,
    validateActionDescription,
    validateActionNotes,
    validateProjectId
};
