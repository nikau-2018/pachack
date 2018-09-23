exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 88801, username: 'tomh', hash: '$argon2id$v=19$m=8,t=2,p=1$yjmQK3uZ0b7oK7RqIua5Kw$rciYEEnFUlkunk09KIGN1VRVhAzWpXrDbHN+kfcUqjU', age: 8, date_created: 'Mon Sep 24 2018 11:00:00 GMT+1200 (NZST)'},
        {id: 88802, username: 'sallyg', hash: '$argon2id$v=19$m=8,t=2,p=1$yjmQK3uZ0b7oK7RqIua5Kw$rciYEEnFUlkunk09KIGN1VRVhAzWpXrDbHN+kfcUqjU', age: 5, date_created: 'Mon Sep 24 2018 11:00:00 GMT+1200 (NZST)'},
        {id: 88803, username: 'bobb', hash: '$argon2id$v=19$m=8,t=2,p=1$yjmQK3uZ0b7oK7RqIua5Kw$rciYEEnFUlkunk09KIGN1VRVhAzWpXrDbHN+kfcUqjU', age: 6, date_created: 'Mon Sep 24 2018 11:00:00 GMT+1200 (NZST)'},
        {id: 88804, username: 'sarahm', hash: '$argon2id$v=19$m=8,t=2,p=1$yjmQK3uZ0b7oK7RqIua5Kw$rciYEEnFUlkunk09KIGN1VRVhAzWpXrDbHN+kfcUqjU', age: 4, date_created: 'Mon Sep 24 2018 11:00:00 GMT+1200 (NZST)'},
        {id: 88805, username: 'harrys', hash: '$argon2id$v=19$m=8,t=2,p=1$yjmQK3uZ0b7oK7RqIua5Kw$rciYEEnFUlkunk09KIGN1VRVhAzWpXrDbHN+kfcUqjU', age: 5, date_created: 'Mon Sep 24 2018 11:00:00 GMT+1200 (NZST)'},
        {id: 88806, username: 'gracen', hash: '$argon2id$v=19$m=8,t=2,p=1$yjmQK3uZ0b7oK7RqIua5Kw$rciYEEnFUlkunk09KIGN1VRVhAzWpXrDbHN+kfcUqjU', age: 7, date_created: 'Mon Sep 24 2018 11:00:00 GMT+1200 (NZST)'}
      ])
    })
}
