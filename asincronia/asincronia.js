const fs = require('fs');

let hola = '';

fs.readFile('./archivos/hello.txt', (err, datos) => {
  console.log(datos.toString())
  hola = datos.toString();
})

console.log("HOLA: ", hola);
