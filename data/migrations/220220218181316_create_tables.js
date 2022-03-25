exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments('project_id');
            tbl.string('project_name', 80).notNullable();
            tbl.string('project_description', 200);
            tbl.boolean('project_completed').defaultTo(false);
        })
        .createTable('resources', tbl => {
            tbl.increments('resource_id');
            tbl.string('resource_name', 80).notNullable().unique();
            tbl.string('resource_description', 200);
        })
        .createTable('tasks', tbl => {
            tbl.increments('task_id');
            tbl.string('task_description', 200).notNullable();
            tbl.string('task_notes', 120);
            tbl.boolean('task_completed').defaultTo(false);
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects');
};