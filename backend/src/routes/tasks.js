const express = require('express')
const router = express.Router();

const Task = require('../models/Task');

router.get('/notes', async (req, res) => {
   const tasks = await Task.find();
   res.json(tasks);
})

router.get('/notes/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
})

router.post('/notes', async(req, res) => {
    const task = new Task(req.body)
    await task.save();
    res.json({
        status: 'Task saved'
    })
})

router.put('/notes/:id', async(req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Task updated'
    })
})

router.delete('/notes/:id', async(req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Task deleted'
    })
})

module.exports = router;