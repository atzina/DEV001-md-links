const { pathExists } = require('./functions');
const {
  turnPathAbsolute, readFiles, isMd, getLinks, getStatus,
} = require('./functions');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (!pathExists(path)) {
    reject(new Error('la ruta no existe'));
  }
  const pathAbsolute = turnPathAbsolute(path);
  if (!isMd(pathAbsolute)) {
    reject(new Error('no es un archivo md'));
  }
  getLinks(pathAbsolute).then((arrayLinks) => {
    if (arrayLinks.length === 0) {
      reject(new Error('no tiene links'));
    }
    if (options === { validate: false }) {
      resolve(arrayLinks);
    }
    getStatus(arrayLinks).then((response) => {
      resolve(response);
    });
  });
});

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
