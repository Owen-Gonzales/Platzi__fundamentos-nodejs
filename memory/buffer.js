// let buffer = Buffer.alloc(5)

// let buffer = Buffer.from([1,2,45,100]) // The buffer shows you data in hexadecimal but internaly it's and handles it in binary

// let buffer = Buffer.from('Hello')
// console.log(buffer.toString())

let abc = Buffer.alloc(26)
for (let i = 0; i < 26; i++) {
  abc[i] = i + 97
  // abc[i] = i + 65
}
console.log(abc.toString())