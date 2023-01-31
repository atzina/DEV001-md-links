// donde va a leer los argumentos de línea de comando y pasarlo a mdlinks
const { mdLinks } = require('./index');

mdLinks('./Prueba/ejemplodos.md').then((value) => {
  console.log(value);
})
  .catch((error) => {
    console.log(error);
  });
