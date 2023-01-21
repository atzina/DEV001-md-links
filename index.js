const { pathExists } = require('./functions');
const { pathIsAbsolute, turnPathAbsolute } = require('./functions');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  // Existe la ruta?
  if (!pathExists(path)) {
    reject(new Error('la ruta no existe'));
    // checar si es una ruta absoluta
    // escribir una funcion q devuelva todos los mds que viva en esta ruta
  } if (!pathIsAbsolute(path)) {
    resolve(turnPathAbsolute(path));
    // Sino existe se rechaza la promesa
    // resolve('si existe la ruta')
    // checa si la ruta es absoluta devuelve true si es absoluta y false si es relativa
    // resolve(pathIsAbsolute(path));
    // si devuelve false convertir en absoluta;
  }
});
console.log(pathExists('C:/Users/AT/Documents/DEV001-md-links/Prueba/ejemplo.md'));
console.log(pathExists('C:/noexsiste.md'));
console.log(pathIsAbsolute('./functions)'));
console.log(turnPathAbsolute('./functions)'));

module.exports = {
  mdLinks,
};
