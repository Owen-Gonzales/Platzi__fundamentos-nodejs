console.clear()
console.time('all')

let sum = 0
console.time('bucle')
for (let i = 0; i < 1000000000; i++) {
  sum += 1
}
console.timeEnd('bucle')

console.time('async')
async()
  .then(() => console.timeEnd('async'))

function async() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Async function finished')
      resolve()
    }, 500)
  })
}

console.timeEnd('all')