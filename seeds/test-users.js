exports.seed = knex =>
  knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        { id: 88801, username: 'test', hash: '$argon2id$v=19$m=8,t=2,p=1$yjmQK3uZ0b7oK7RqIua5Kw$rciYEEnFUlkunk09KIGN1VRVhAzWpXrDbHN+kfcUqjU', age: 10 }
      ]))
