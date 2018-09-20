exports.up = (knex, Promise) => {
  return knex.schema.createTable('foods', t => {
    t.increments('id').primary()
    t.string('name')
    t.integer('category_id').references('categories.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('foods')
}
