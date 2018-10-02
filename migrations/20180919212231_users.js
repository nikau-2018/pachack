exports.up = knex =>
  knex.schema.createTable('users', t => {
    t.increments('id').primary()
    t.string('username').unique()
    t.string('hash')
    t.integer('age')
    t.timestamps(true, true)
  })

exports.down = knex => knex.schema.dropTable('users')
