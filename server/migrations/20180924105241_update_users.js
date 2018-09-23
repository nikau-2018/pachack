exports.up = knex =>
  knex.schema.table('users', t => {
    t.string('date_created')
  })

exports.down = knex => knex.schema.dropTable('users')
