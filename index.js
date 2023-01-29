const { pathExists } = require('./functions');
const {
  pathIsAbsolute, turnPathAbsolute, readFiles, isMd, getLinks,
} = require('./functions');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  // Existe la ruta?
  if (!pathExists(path)) {
    reject(new Error('la ruta no existe'));
    // checar si es una ruta absoluta
    // escribir una funcion q devuelva todos los mds que viva en esta ruta
  } if (!pathIsAbsolute(path)) {
    const pathAbsolute = turnPathAbsolute(path);
    if (!isMd(pathAbsolute)) {
      reject(new Error('no es un archivo md'));
    } else { // resolve(readFiles(pathAbsolute));
      resolve(getLinks(pathAbsolute));
    }
  }
});
// console.log(pathExists('C:/Users/AT/Documents/DEV001-md-links/Prueba/ejemplo.md'));
// console.log(pathExists('C:/noexsiste.md'));
// console.log(pathIsAbsolute('./functions)'));
// console.log(turnPathAbsolute('./functions)'));
// console.log(readFiles('C:/Users/AT/Documents/DEV001-md-links/Prueba/ejemplo.md'));
// console.log(isMd('C:\\Users\\AT\\Documents\\DEV001-md-links\\Prueba\\ejemplo.md'));
// console.log(isMd('./Prueba/ejemplo.md'));
// // console.log(arrayOfMd('./Prueba/ejemplo.md'));
// console.log(getLinks('C:/Users/AT/Documents/DEV001-md-links/Prueba/ejemplo.md'));

module.exports = {
  mdLinks,
};
