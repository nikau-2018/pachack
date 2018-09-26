exports.up = knex =>
  knex.schema.createTable('lunchboxes', t => {
    t.increments('id').primary()
    t.integer('user_id').references('users.id')
    t.integer('produce').references('foods.id')
    t.integer('grains').references('foods.id')
    t.integer('dairy').references('foods.id')
    t.integer('protein').references('foods.id')
    t.integer('other').references('foods.id')
    t.timestamps(true, true)
  })

exports.down = knex => knex.schema.dropTable('lunchboxes')
