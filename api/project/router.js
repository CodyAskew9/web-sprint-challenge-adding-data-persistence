// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Projects.getAllProjects()
        .then(all => {
            res.status(200).json(all);
        })
        .catch(err => {
            next(err);
        })
});

router.post('/', (req, res, next) => {
    Projects.postProject(req.body)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            next(err);
        })
});

module.exports = router; 