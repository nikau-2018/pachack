exports.up = knex =>
  knex.schema.table('users', t => {
    t.timestamps(true, true)
  })

exports.down = knex => knex.schema.table.dropTimestamps()
