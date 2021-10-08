const http = require('http')

const router = (req, res) => {
  console.log('New request')
  console.log(req.url)

  switch (req.url) {
    case '/hi':
      res.write(`Hi, what's your name`)
      res.end()
      break;
    case '/code':
      res.write(`I'm leaning node yeah`)
      res.end()
    default:
      res.write(`Error 404: I don't know what you want`)
      res.end()
      break;
  }
  // res.writeHead('201', {'Content-Type': 'text/plain'})
  // res.write('Hi, I already know how to use htttp')
  // res.end
}

http.createServer(router).listen(3000)
console.log('Listening http in 3000 port')