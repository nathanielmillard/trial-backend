//Do I want to use .date as opposed to string?
//User id is a one to many relationship so may need different handling...
//Is snake case best practice in knex/node/express as well?

exports.up = function(knex) {
  return knex.schema.createTable('reflections', (table)=>{
    table.increments('id').primary();
    table.string('date').notNullable();
    table.string('userId').notNullable();
    // table.integer('userId').references('id').inTable('users');
    table.string('body').notNullable();
    table.string('feeling').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('reflections')
};
