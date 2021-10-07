const fs = require('fs')
const stream = require('stream')
const util = require('util')

let data = ''
let readableStream = fs.createReadStream(__dirname + '/input.txt')
readableStream.setEncoding('UTF8')
// readableStream.on('data', (chunk) => {
//   data += chunk
// })

// readableStream.on('end', () => {
//   console.log(data)
// })


// process.stdout.write("Hi")
// process.stdout.write("What's up?")


const Transform = stream.Transform

function UpperCase() {
  Transform.call(this)
}
util.inherits(UpperCase, Transform)

UpperCase.prototype._transform = function(chunk, coif, callback) {
  chunkUpperCase = chunk.toString().toUpperCase()
  this.push(chunkUpperCase)
  callback()
}

let upperCase = new UpperCase()

readableStream
  .pipe(upperCase)
  .pipe(process.stdout)