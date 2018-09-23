exports.up = knex =>
  knex.schema.table('users', t => {
    t.integer('produce').references('foods.id')
    t.integer('grains').references('foods.id')
    t.integer('dairy').references('foods.id')
    t.integer('protein').references('foods.id')
    t.integer('other').references('foods.id')
  })

exports.down = knex => knex.schema.dropTable('users')
