const { mdLinks } = require('../index');
const {
  turnPathAbsolute, pathExists, pathIsAbsolute, isMd, readFiles, arrayOfMd, getLinks, getStatus,
} = require('../functions');
const { totalLinks, uniqueLinks, brokenLinks } = require('../cli')


const absolutRoute = 'C:\\Users\\AT\\Documents\\DEV001-md-links\\Prueba\\ejemplo.md';
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
const arrayValidate = [
  {
    href: 'https://github.com/atzina/DEV001-cipher/blob/main/README.md',
    text: 'archivo md',
    file: 'C:\\Users\\AT\\Documents\\DEV001-md-links\\Prueba\\ejemplo.md',
    status: 200,
    Ok: 'OK'
  },
  {
    href: 'https://github.com/atzina/DEV001-data-lovers/blob/main/README.md',
    text: 'archivo md',
    file: 'C:\\Users\\AT\\Documents\\DEV001-md-links\\Prueba\\ejemplo.md',
    status: 200,
    Ok: 'OK'
  }
];
const arrayInvalid = [
  {
    href: 'https://github.com/atzin/DEV001-cipher/blob/main/README.md',
    text: 'archivo md',
    file: 'C:\\Users\\AT\\Documents\\DEV001-md-links\\Prueba\\ejemplo.md'
  },
];
const arrayStatusInvalid = [
  {
    href: 'https://github.com/atzina/DEV001-cipher/blob/main/README.md',
    text: 'archivo md',
    file: 'C:\\Users\\AT\\Documents\\DEV001-md-links\\Prueba\\ejemplo.md',
    status: 404,
    Ok: 'fail'
    },
];
const totalLenth = 'Total : 2';
const uniqueResult = 'Unique : 2';
const brokenResult = 'Broken : 1';

describe('mdLinks', () => {
  it('should...', () => {
    console.log('FIX ME!');
  });
  // it('Debería devolver una promesa', () => {
  //   expect(mdLinks()).toBe(typeof Promise);
  // });
});
describe('mdLinks', () => {
  it('debe rechazar cuando el path no existe', () => mdLinks('/estepathnoexiste.md').catch((error) => {
  expect(error).toEqual(new Error('la ruta no existe'));
  }));
});
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
  it('lee el contenido de un archivo md', () => readFiles('./Prueba/ejemplodos.md').then((data) => {
    expect(data).toEqual('no tengo links');
  }));
});
describe('readFiles', () => {
  it('lanza un error si no tiene links', () => readFiles('./Prueba/ejemplosinlinks.md').catch((data) => {
    expect(data).toEqual(new Error());
  }));
});
describe('mdLinks', () => {
  it('lanza un error si no tiene links', () => mdLinks('./Prueba/ejemplosinlinks.md').catch((error) => {
    expect(error).toEqual(new Error('no tiene links'));
  }));
});

describe('getLinks', () => {
  it('trae los links a un array y les agrega propiedades', () => getLinks(absolutRoute).then((data) => {
    expect(data).toEqual(array);
  }));
});
describe('getLinks', () => {
  it('lanza error no tiene links', () => getLinks(absolutRoute).catch((data) => {
    expect(data).toEqual(new Error('no tiene links'));
  }));
});


describe('getStatus', () => {
  it('valida los links haciendo una petición http', () => getStatus(array).then((data) => {
    expect(data).toEqual(arrayValidate);
  }));
});

describe('getStatus', () => {
  it('valida los links que NO sirven haciendo una petición http', () => getStatus(arrayInvalid).catch((data) => {
    expect(data).toEqual(arrayStatusInvalid);
  }));
});

// evaluar getStatus desde mdLinks
describe('mdLinks', () => {
  it('valida los links haciendo una petición http', () => mdLinks('./Prueba/ejemplo.md').then((data) => {
    expect(data).toEqual(arrayValidate);
  }));
});

describe('totalLinks', () => {
  it('devuelve la extensión del array', () => {
    totalLinks(array);
    expect(totalLinks(array)).toEqual(totalLenth);
  });
});

describe('uniqueLinks', () => {
  it('devuelve los links que no se repiten', () => {
    uniqueLinks(array);
    expect(uniqueLinks(array)).toEqual(uniqueResult);
  });
});

describe('brokenLinks', () => {
  it('devuelve la extensión del array', () => {
    brokenLinks(arrayStatusInvalid);
    expect(brokenLinks(arrayStatusInvalid)).toEqual(brokenResult);
  });
});
