function async(callback) {
  setTimeout(() => {
    try {
      let a = 3 + o
      callback(null, a)
    } catch (error) {
      callback(error, null)
    }
  }, 1000) 
}

async((err, data) => {
  if (err) {
    console.error('We have an error')
    console.error(err)
    // throw err //Don't work
    return false
  }
  console.log('All right')
})