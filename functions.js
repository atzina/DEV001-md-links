const fs = require('fs');
const path = require('path');
const fsPromises = require('fs/promises');
const { fileURLToPath } = require('url');
const { url } = require('inspector');
// eslint-disable-next-line import/no-extraneous-dependencies
const axios = require('axios');

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
const array = [
  {
    href: 'https://github.com/atzina/DEV001-cipher/blob/main/README.md',
    text: 'archivo md',
    file: 'C:\\Users\\AT\\Documents\\DEV001-md-links\\Prueba\\ejemplo.md',

  },
  {
    href: 'https://github.com/atzina/DEV001-data-lovers/blob/main/README.md',
    text: 'archivo md',
    file: 'C:\\Users\\AT\\Documents\\DEV001-md-links\\Prueba\\ejemplo.md',
  },
];
const getStatus = (urls) => Promise.all(urls.map((link) => axios.get(link.href)
  .then((respuesta) => {
  // const { status } = respuesta;
    console.log(respuesta.status);
    return { ...link, status: respuesta.status, message: 'ok' };
  })
  .catch((error) => {
    return { ...link, status: error.status, message: 'fail' };
  })));
getStatus(array).then((resolve) => console.log((resolve)));
module.exports = {
  pathExists,
  pathIsAbsolute,
  turnPathAbsolute,
  readFiles,
  isMd,
  getLinks,
  getStatus,
};
