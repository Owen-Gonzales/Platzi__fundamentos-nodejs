function invoqueMistake() {
  mistake()
}

function mistake() {
  return 8 + o
}

function asyncMistake() {
  setTimeout(() => {
    try {
      return 8 + o
    } catch (err) {
      console.log('Ups, has been an error')
      console.log(err.message)
    }
  }, 1000)
}

try {
  // invoqueMistake()
  asyncMistake()
} catch(err) {
  console.log('Has been an error')
  console.error(err)
  console.error(err.message)
  console.log('But nothing happens, I caught it')
}