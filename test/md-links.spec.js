const { mdLinks } = require('../index.js');


describe('mdLinks', () => {
  it('should...', () => {
    console.log('FIX ME!');
  });
  // it('Debería devolver una promesa', () => {
  //   expect(mdLinks()).toBe(typeof Promise);
  // });
  it('debe rechazar cuando el path no existe', () => mdLinks('/estepathnoexiste.md').catch((error) => {
    expect(error).toStrictEqual(new Error('la ruta no existe'));
  }));
});
// describe('mdLinks', () => {
//   it('si existe', () => mdLinks('./Prueba/ejemplo.md').then((value) => {
//   expect(value).toHaveBeenCalled('C:\\Users\\AT\\Documents\\DEV001-md-links\\Prueba\\ejemplo.md');
//   }));
// });

describe('mdLinks', () => {
  it('si es una ruta relativa cambia a absoluta', () => mdLinks('./Prueba/ejemplo.md').then((value) => {
  expect(value).toEqual('C:\\Users\\AT\\Documents\\DEV001-md-links\\Prueba\\ejemplo.md');
  }));
});
