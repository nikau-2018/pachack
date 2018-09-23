exports.up = knex =>
  knex.schema.table('foods', t => {
    t.timestamps(true, true)
  })

exports.down = knex => knex.schema.table.dropTimestamps()
