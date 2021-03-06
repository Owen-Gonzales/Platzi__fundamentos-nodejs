function hi(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hi, ${name}`)
      resolve(name)
    }, 1500);
  })
}

function talk(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Say something')
      resolve(name)
    }, 1000);
  })
}

function bye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Bye, ${name}`)
      // resolve(name)
      reject('There is an error')
    }, 1000);
  })
}

hi('Owen')
  .then(talk)
  .then(talk)
  .then(talk)
  .then(bye)
  .then(name => {
    console.log(`Finished process, ${name}.`)
  })
  .catch(error => {
    console.log('An error has ocucrred')
    console.error(error)
  })