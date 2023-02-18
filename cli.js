#!/usr/bin/env node
/* eslint-disable no-console */
// donde va a leer los argumentos de línea de comando y pasarlo a mdlinks
// eslint-disable-next-line import/no-extraneous-dependencies
const chalk = require('chalk');
const { mdLinks } = require('./index');

const route = process.argv[2];
// console.log(route);
const arg = process.argv;
const validate = arg.includes('--validate');
const stats = arg.includes('--stats');
// console.log(process.argv[3]);

const totalLinks = (array) => `Total : ${array.length}`;
const uniqueLinks = (array) => {
  const unique = new Set(array.map((link) => link.href)).size; // no muestra los repetidos.
  return `Unique : ${unique}`;
};
const brokenLinks = (array) => {
  const broken = array.filter((link) => link.status === 'fail' || link.status > 400 || link.status < 199);
  return `Broken : ${broken.length}`;
};

// const linksOk = (array) => {
//   const oki = array.filter((link) => link.status === 'OK' || link.status >= 200 || link.stats <= 299);
//   return `Links Ok : ${oki.length}`;
// };
// const linksOkTwo = (array) => {
//   const oki = array.filter((link) => link.status === 'ok');
//   return ` ${oki}`;
// };
if (process.argv[3] === undefined) {
  mdLinks(route, { validate: false }).then((value) => {
    console.log(value);
  })
    .catch((error) => {
      console.log(chalk.blue(error));
    });
} else {
  mdLinks(route, { validate: true }).then((value) => {
    // console.log(totalLinks(value));
    if (validate && stats) {
      console.log(chalk.blue(totalLinks(value)));
      console.log(chalk.magenta(uniqueLinks(value)));
      console.log(chalk.red(brokenLinks(value)));
      value.forEach((link) => {
        console.log(`
        ${'HREF :'} ${chalk.magenta(link.href)} ${chalk.yellowBright(link.Ok)}
        `);
      });
    //   console.log(uniqueLinks(value));
    } else if (validate) {
      console.log(chalk.blue(totalLinks(value)));
      value.forEach((link) => {
        console.log(`
        ${'HREF :'} ${chalk.magenta(link.href)} ${chalk.yellowBright(link.Ok)}
        `);
      });
    } else if (stats) {
      console.log(chalk.blue(totalLinks(value)));
      console.log(chalk.magenta(uniqueLinks(value)));
      console.log(chalk.red(brokenLinks(value)));
    }
  })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = {
  totalLinks,
  uniqueLinks,
  brokenLinks,
};
