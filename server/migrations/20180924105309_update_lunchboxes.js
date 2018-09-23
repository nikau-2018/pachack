exports.up = knex =>
  knex.schema.table('lunchboxes', t => {
    t.integer('produce').references('foods.id')
    t.integer('grains').references('foods.id')
    t.integer('dairy').references('foods.id')
    t.integer('protein').references('foods.id')
    t.integer('other').references('foods.id')
  })

exports.down = knex =>
  knex.schema.table('lunchboxes', t => {
    t.dropForeign('produce', 'foods.id')
    t.dropForeign('grains', 'grains.id')
    t.dropForeign('dairy', 'dairy.id')
    t.dropForeign('protein', 'protein.id')
    t.dropForeign('other', 'other.id')
  })
