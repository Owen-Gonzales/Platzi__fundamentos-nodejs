const moment = require('moment')

let now = moment()

console.log(now.toString())
console.log(`Date:${now.format('YYYY/MM/DD')}
Hour: ${now.format('HH:mm:ss')}`)
