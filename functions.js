const fs = require('fs');
const path = require('path');

const pathExists = (route) => fs.existsSync(route);
const pathIsAbsolute = (AbsoluteRoute) => path.isAbsolute(AbsoluteRoute);
// ternario = Si la ruta es absoluta es true, devolver la ruta,
// de lo contrario aplicar path.resolve para convertirla.
const turnPathAbsolute = (route) => (pathIsAbsolute(route) ? route : path.resolve(route));

module.exports = {
  pathExists,
  pathIsAbsolute,
  turnPathAbsolute,
};
