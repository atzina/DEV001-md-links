const { pathExists } = require('./functions');
const {
  turnPathAbsolute, readFiles, isMd, getLinks, getStatus,
} = require('./functions');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  // Existe la ruta?
  if (pathExists(path)) {
    const pathAbsolute = turnPathAbsolute(path);
    if (isMd(pathAbsolute)) {
      getLinks(pathAbsolute).then((arrayLinks) => {
        if (arrayLinks.length !== 0) {
          resolve(arrayLinks);
        } else {
          reject(new Error('no tiene links'));
        }
      });
    } else {
      reject(new Error('no es un archivo md'));
    }
    // checar si es una ruta absoluta
    // escribir una funcion q devuelva todos los mds que viva en esta ruta
  } else {
    reject(new Error('la ruta no existe'));
  }
});
  // if (!pathIsAbsolute(path)) { // que entre cuando sea o no absoluta.
  //   const pathAbsolute = turnPathAbsolute(path);
  //   if (!isMd(pathAbsolute)) {
  //     reject(new Error('no es un archivo md'));
  //   } else if (getLinks(pathAbsolute) === []) { // resolve(readFiles(pathAbsolute));
  //     reject(new Error('no tiene links'));
  //   } else {
  //     console.log(getLinks(pathAbsolute));
  //     resolve(getLinks(pathAbsolute));
  //   }
  // }

// console.log(pathExists('C:/Users/AT/Documents/DEV001-md-links/Prueba/ejemplo.md'));
// console.log(pathExists('C:/noexsiste.md'));
// console.log(pathIsAbsolute('./functions)'));
// console.log(turnPathAbsolute('./functions)'));
console.log(readFiles('C:/Users/AT/Documents/DEV001-md-links/Prueba/ejemplo.md').then);
// console.log(isMd('C:\\Users\\AT\\Documents\\DEV001-md-links\\Prueba\\ejemplo.md'));
// console.log(isMd('./Prueba/ejemplo.md'));
// // console.log(arrayOfMd('./Prueba/ejemplo.md'));
// console.log(getLinks('C:/Users/AT/Documents/DEV001-md-links/Prueba/ejemplo.md'));

module.exports = {
  mdLinks,
};
