// build your `Task` model here
const db = require('../../data/dbConfig');

function getAllTasks() {
    return db('tasks');
}

async function postTask(task) {
    const [task_id] = await db('tasks')
        .insert(task);

    return getAllTasks()
        .where({ task_id })
        .first();
}

module.exports = {
    getAllTasks,
    postTask,
};