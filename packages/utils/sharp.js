const sharp = require('sharp')
sharp('js.png')
  .resize(100)
  .grayscale()
  .toFile('js_100_grayscale.jpg')

sharp('megaman.webp')
  .resize(64)
  .trim() // interesting
  .toFile('megaman_64.png')