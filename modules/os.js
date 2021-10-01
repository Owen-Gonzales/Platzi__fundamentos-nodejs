const os = require('os')

// console.log(os.arch())
// console.log(os.platform())
// console.log(os.cpus())
// console.log(os.constants)

// const kb = bytes => bytes/1024
// const mb = bytes => kb(bytes)/1024
// const gb = bytes => mb(bytes)/1024
// console.log(os.freemem())
// console.log(gb(os.freemem()))
// console.log(gb(os.totalmem()))

console.log(os.homedir())
console.log(os.tmpdir())
console.log(os.hostname())
console.log(os.networkInterfaces())