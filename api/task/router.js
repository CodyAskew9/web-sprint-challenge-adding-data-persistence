// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Tasks.getAllTasks()
        .then(all => {
            res.status(200).json(all);
        })
        .catch(err => {
            next(err);
        })
});

router.post('/', (req, res, next) => {
    Tasks.postTask(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            next(err);
        })
});

module.exports = router;