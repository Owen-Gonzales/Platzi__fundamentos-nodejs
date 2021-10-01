const bcrypt = require('bcrypt')

const password = 'strong password'
bcrypt.hash(password, 1, (err, hash) => {
  console.log(hash)
  bcrypt.compare(password, hash, (err, res) => {
    console.log(`correct password: ${res}`)
  })
})