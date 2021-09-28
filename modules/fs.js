const fs = require('fs') 

function read(path, callback) {
  fs.readFile(path, (err, data) => {
    callback(data.toString())
  })
}

function write(path, content, callback) {
  fs.writeFile(path, content, (err) => {
    if (err) console.error(`I couldn't write that. ${err}`)
    else console.log(`Has been spelled correctly`)
  })
}

function erase(path, callback) {
  fs.unlink(path, callback)
}

read(__dirname + '/file.txt', console.log)
write(__dirname + '/fileNew.txt', "I'm a new line", console.log)
read(__dirname + '/fileNew.txt', console.log)
erase(__dirname + '/fileNew.txt', console.log)