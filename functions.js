/* eslint-disable indent */
const fs = require('fs');
const path = require('path');
const fsPromises = require('fs/promises');
const { fileURLToPath } = require('url');

const pathExists = (route) => fs.existsSync(route);
const pathIsAbsolute = (AbsoluteRoute) => path.isAbsolute(AbsoluteRoute);
// ternario = Si la ruta es absoluta es true, devolver la ruta,
// de lo contrario aplicar path.resolve para convertirla.
const turnPathAbsolute = (route) => (pathIsAbsolute(route) ? route : path.resolve(route));
const isMd = (route) => path.extname(route) === '.md'; // tengo duda si esta función necesita de parametro turnPahtAbsolute?
// const readFiles = (route) => fs.readFileSync(route, 'utf-8');
// const readFiles = (route) => fsPromises.readFile(route, { encoding: 'utf-8' });
const readFiles = (route) => new Promise((resolve, reject) => {
  fs.readFile(route, 'utf-8', (error, data) => {
    if (error) {
      reject(error);
    } else {
      resolve(data);
    }
  });
});

const getLinks = (route) => new Promise((resolve, reject) => {
    const links = [];
    readFiles(route)
    .then((data) => {
      const urlLinks = /\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g;
      let match = urlLinks.exec(data);
      while (match !== null) { // while se ejecuta hasta que la condición () da falsa.
        links.push({
          href: match[2],
          text: match[1],
          file: route,
        });
        match = urlLinks.exec(data);
      }

      resolve(links);
    })
   .catch((error) => reject(error));
  });
  // const links = readFiles(isMd(route)).match(urlLinks);
//   if (isMd(route)) {
//     return readFiles(route).match(urlLinks);// map transforma un arreglo en otro
//   }
//   return []; // puede ser error
// };
const getStatus = (urls) => urls.map(arrayLinks)

module.exports = {
  pathExists,
  pathIsAbsolute,
  turnPathAbsolute,
  readFiles,
  isMd,
  getLinks,
};
