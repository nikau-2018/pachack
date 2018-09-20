exports.up = (knex, Promise) => {
  return knex.schema.createTable('categories', t => {
    t.increments('id').primary()
    t.string('name')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('categories')
}
