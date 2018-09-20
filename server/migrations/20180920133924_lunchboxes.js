exports.up = knex =>
  knex.schema.createTable('lunchboxes', t => {
    t.increments('id').primary()
    t.integer('user_id').references('users.id')
    t.integer('produce')
    t.integer('grains')
    t.integer('dairy')
    t.integer('protein')
    t.integer('other')
    t.timestamps()
  })

exports.down = knex => knex.schema.dropTable('lunchboxes')
