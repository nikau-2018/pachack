exports.up = knex => 
  knex.schema.table('users', t => {
    
  })

exports.down = knex => knex.schema.dropTable('users')
