exports.up = knex =>
  knex.schema.createTable('lunchboxes', t => {
    t.increments('id').primary()
    t.integer('user_id')
    t.string('produce')
    t.string('grains')
    t.string('dairy')
    t.string('protein')
    t.string('other')
    t.timestamps()
  })

exports.down = knex => knex.schema.dropTable('lunchboxes')
