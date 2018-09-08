const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
    //Se pueden usar también callbacks y promises. async y await para codigo asíncrono. Consulta en la DB y cuando termines almacena en una const
   const tasks = await Task.find();
   res.json(tasks);
});

router.post('/', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json({
        status: "task saved"
    });
});

router.put('/:id', async (req, res) => {
   await Task.findByIdAndUpdate(req.params.id, req.body);


    res.json({
        status: "task updated"
    })
});


router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
 
     res.json({
         status: "task deleted"
     })
 });

module.exports = router;