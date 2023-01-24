const fs = require('fs');
const path = require('path');
const fsPromises = require('fs/promises');

const pathExists = (route) => fs.existsSync(route);
const pathIsAbsolute = (AbsoluteRoute) => path.isAbsolute(AbsoluteRoute);
// ternario = Si la ruta es absoluta es true, devolver la ruta,
// de lo contrario aplicar path.resolve para convertirla.
const turnPathAbsolute = (route) => (pathIsAbsolute(route) ? route : path.resolve(route));
const isMd = (route) => path.extname(route) === '.md';
const readFiles = (route) => fs.readFileSync(route, 'utf-8');
// const readFiles = (route) => fsPromises.readFile(route, { encoding: 'utf-8' });
// const readFiles = (route) => new Promise((resolve, reject) => {
//   fs.readFile(route, 'utf-8', (error, data) => {
//     if (error) {
//       reject(error);
//     }
//     resolve(data);
//   });
// });

module.exports = {
  pathExists,
  pathIsAbsolute,
  turnPathAbsolute,
  readFiles,
  isMd,
};
