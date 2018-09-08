const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
    //Se pueden usar también callbacks y promises. async y await para codigo asíncrono. Consulta en la DB y cuando termines almacena en una const
   const tasks = await Task.find();
   res.json(tasks);
})

module.exports = router;