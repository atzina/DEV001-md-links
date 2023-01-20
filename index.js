const { pathExists } = require('./functions');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  // Existe la ruta?
  if (!pathExists(path)) {
    reject(new Error('la ruta no existe'));
    // checar si es una ruta absoluta
    // función que diga si es archivo o directorio.
    // prueba la extención y compara con md.
    // escribir una funcion q devuelva todos los mds que viva en esta ruta
  } else {
    // Sino existe se rechaza la promesa
    resolve('si existe la ruta'); // que esté en el if y no en elese?
  }
});
console.log(pathExists('C:/Users/AT/Documents/DEV001-md-links/Prueba/ejemplo.md'));
console.log(pathExists('C:/noexsiste.md'));

module.exports = {
  mdLinks,
};
