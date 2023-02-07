// donde va a leer los argumentos de línea de comando y pasarlo a mdlinks
// eslint-disable-next-line import/no-extraneous-dependencies
const chalk = require('chalk');
const { mdLinks } = require('./index');

const route = process.argv[2];
console.log(route);
const arg = process.argv;
const validate = arg.includes('--validate');
const stats = arg.includes('--stats');

const totalLinks = (array) => `Total : ${array.length}`;
const uniqueLinks = (array) => {
  const unique = new Set(array.map((link) => link.href)).size; // no muestra los repetidos.
  return `Unique : ${unique}`;
};
const brokenLinks = (array) => {
  const broken = array.filter((link) => link.status === 'fail' || link.status > 400 || link.stats < 199);
  return `Broken : ${broken.length}`;
};

mdLinks(route, { validate: true }).then((value) => {
  // console.log(totalLinks(value));
  if (validate && stats) {
    console.log(chalk.blue(totalLinks(value)));
    console.log(chalk.magenta(uniqueLinks(value)));
    console.log(chalk.red(brokenLinks(value)));
  //   console.log(uniqueLinks(value));
  } else if (validate) {
    console.log(chalk.blue(totalLinks(value)));
  } else if (stats) {
    console.log(chalk.blue(totalLinks(value)));
    console.log(chalk.magenta(uniqueLinks(value)));
  }
})
  .catch((error) => {
    console.log(error);
  });
