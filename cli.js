// donde va a leer los argumentos de línea de comando y pasarlo a mdlinks
const { mdLinks } = require('./index.js');

mdLinks('/noexiste').then(()=>{

})
.catch((error)=>{
    console.log(error)
});


// mdLinks('/C:\Users\AT\Desktop\README').then(()=>{})
// .then((sigue)=>{
//     console.log(sigue)
// });