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

describe('mdLinks', () => {
  it('debe hacer algo si la ruta existe', () => mdLinks('C:/Users/AT/Documents/DEV001-md-links/Prueba/ejemplo.md').then((value) => {
    expect(value).toBe('si existe la ruta');
  }));
});
