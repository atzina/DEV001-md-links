const { mdLinks } = require('../index');
const { turnPathAbsolute, pathExists, pathIsAbsolute, isMd, readFiles, arrayOfMd } = require('../functions');


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
describe('pathExists', () => {
  it('si existe el archivo', () => {
    pathExists('./Prueba/ejemplo.md');
    expect(pathExists('./Prueba/ejemplo.md')).toEqual(true);
  });
});

describe('pathIsAbsolute', () => {
  it('dice si es una ruta absoluta', () => {
    pathIsAbsolute('./Prueba/ejemplo.md');
    expect(pathIsAbsolute('./Prueba/ejemplo.md')).toEqual(false);
  });
});

// describe('mdLinks', () => {
//   it('si es una ruta relativa la cambia a absoluta', () => mdLinks('./Prueba/ejemplo.md').then((value) => {
//   expect(value).toEqual('C:\\Users\\AT\\Documents\\DEV001-md-links\\Prueba\\ejemplo.md');
//   }));
// });
describe('turnPathAbsolute', () => {
  it('si es una ruta relativa la cambia a absoluta', () => {
    turnPathAbsolute('./Prueba/ejemplo.md');
    expect(turnPathAbsolute('./Prueba/ejemplo.md')).toEqual('C:\\Users\\AT\\Documents\\DEV001-md-links\\Prueba\\ejemplo.md');
  });
});

describe('turnPathAbsolute', () => {
  it('si es una ruta absoluta la devuelve', () => {
    turnPathAbsolute('C:\\Users\\AT\\Documents\\DEV001-md-links\\Prueba\\ejemplo.md');
    expect(turnPathAbsolute('C:\\Users\\AT\\Documents\\DEV001-md-links\\Prueba\\ejemplo.md')).toEqual('C:\\Users\\AT\\Documents\\DEV001-md-links\\Prueba\\ejemplo.md');
  });
});

describe('isMd', () => {
  it('comprueba si es un archivo md', () => {
    isMd('./Prueba/ejemplo.md');
    expect(isMd('./Prueba/ejemplo.md')).toEqual(true);
  });
});

describe('mdLinks', () => {
  it('sale error si no es archivo md', () => mdLinks('./Prueba/ejemplo.html').catch((error) => {
  expect(error).toStrictEqual(new Error('no es un archivo md'));
  }));
});

// describe('mdLinks', () => {
//   it('se resuelve si es un archivo md', () => mdLinks('./Prueba/ejemplo.md').then((value) => {
//   expect(value).toEqual(true);
//   }));
// });

describe('readFiles', () => {
  it('lee el contenido de un archivo md', () => {
    readFiles('./Prueba/ejemplo.md');
    expect(readFiles('./Prueba/ejemplo.md')).toEqual('hola md');
  });
});

// describe('mdLinks', () => {
//   it('debe leer el contenido del documento', () => mdLinks('./Prueba/ejemplo.md').then((value) => {
//   expect(value).toEqual('hola md');
//   }));
// });

describe('mdLinks', () => {
  it('debe devolver un array de links', () => mdLinks('./Prueba/ejemplo.md').then((value) => {
  expect(value).toEqual(['[archivo md](https://github.com/atzina/DEV001-cipher/blob/main/README.md)']);
  }));
});