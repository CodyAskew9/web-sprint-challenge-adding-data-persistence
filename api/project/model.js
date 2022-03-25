// build your `Project` model here
const db = require('../../data/dbConfig');

function getAllProjects() {
    return db('projects');
}

async function postProject(project) {
    const [project_id] = await db('projects')
        .insert(project);

    return getAllProjects()
        .where({ project_id })
        .first();
}

module.exports = {
    getAllProjects,
    postProject,
};