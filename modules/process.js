process.on('beforeExit', () => {
  console.log('The process is almost over')
})

process.on('exit', () => {
  console.log('The process finished')
  setTimeout(() => {
    console.log("This will not show")
  })
})

process.on('uncaughtException', (err, origin) => {
  console.error(`Ups, we forgot to catch an error`)
  console.error('Error: ' + err.message)
})

test()
console.log(a + 5) // Just take the first error