const { exec, spawn } = require('child_process')

// exec('node modules/console.js', (err, stdout, sterr) => {
//   if (err) {
//     console.error(err)
//     return false
//   }

//   console.log(stdout)
// })

let process = spawn('ls', ['-la'])
console.log(process.pid)
console.log(process.connected)

process.stdout.on('data', (date) => {
  // console.log(process.killed)
  console.log(`Is it dead: ${process.killed} `)
  console.log(date.toString())
})

process.on('exit', () => {
  console.log('The process finished')
  console.log(`Here the process is still live. Is the process finished? ${process.killed}`)
})
console.log(`First question, Is the process killed? ${process.killed}`)