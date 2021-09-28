function hi(name, callback) {
  setTimeout(() => {
    console.log(`Hola, ${name}`)
    callback(name)
  }, 1500);
}

function bye(name, callback) {
  setTimeout(() => {
    console.log(`Adios, ${name}`)
    callback()
  }, 1000);
}

console.log('Stating process')
hi('Owen', name => {
  bye(name, () => {
    console.log('Final process')
  })
})