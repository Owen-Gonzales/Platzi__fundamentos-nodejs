function hi(name, callback) {
  setTimeout(() => {
    console.log(`Hi, ${name}`)
    callback(name)
  }, 1500);
}

function talk(callback) {
  setTimeout(() => {
    console.log('Say something')
    callback()
  }, 1000);
}

function bye(name, callback) {
  setTimeout(() => {
    console.log(`Bye, ${name}`)
    callback()
  }, 1000);
}

function conversation(name, times, callback) {
  if (times > 0) {
    talk(() => {
      conversation(name, --times, callback)
    })
  } else {
    bye(name, callback)
  }
}

console.log('Process started')
hi('Owen', (name) => {
  conversation(name, 3, () => {
    console.log('Finished process')
  })
})


// hi('Owen', (name) => {
//   bye(name, () => {
//     console.log('We finish')
//   })
// })




// hi('Owen', name => {
//   talk(() => {
//     talk(() => {
//       talk(() => {
//         bye(name, () => {
//           console.log('Final process')
//         })
//       })
//     })
//   })
// })