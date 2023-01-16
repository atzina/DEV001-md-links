const fs = require('fs');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  // Existe la ruta?
  if (fs.existsSync(path)) {
    // checar si es una ruta absoluta
    // función que diga si es archivo o directorio.
    // prueba la extención y compara con md.
    // escribir una funcion q devuelva todos los mds que viva en esta ruta
  } else {
    // Sino existe se rechaza la promesa
    reject('la ruta no existe');
  }
});
module.exports = {
  mdLinks,
};
