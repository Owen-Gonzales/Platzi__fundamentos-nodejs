let pokemons = {
  pikachu: {
    type: 'Electric',
    level: 5
  },
  charmander: {
    type: 'Fire',
    level: 15
  }
}
console.time('Time')

console.group('Kind of informative console')
  console.log('Something normal')
  console.info('Something info')
  console.error('something error')
  console.warn('something warn')
console.groupEnd('Kind of informative console')

console.group('Console for objects')
  console.table(pokemons)
console.groupEnd('Console for objects')

console.group('Console.count')
for(let i = 0; i < 3; i++) {
  console.count('Times')
}
  console.count('Times')
  console.countReset('Times')
  console.count('Times')
  console.count('Times')
console.groupEnd('Console.count')

console.timeEnd('Time')

// console.clear()