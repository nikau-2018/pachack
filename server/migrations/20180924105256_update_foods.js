exports.up = knex =>
  knex.schema.table('foods', t => {
    t.string('date_created')
  })

exports.down = knex => knex.schema.dropTable('foods')
