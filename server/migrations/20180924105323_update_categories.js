exports.up = knex =>
  knex.schema.table('users', t => {
    t.string('name').unique()
  })

exports.down = knex => knex.schema.dropTable('users')
