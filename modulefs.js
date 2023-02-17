
const fs = require('fs');

const os = require('os');

//leer el contenido de un archivo
// const dato= fs.readFileSync('../modulos2/data/dato.txt','utf-8');
// console.log(dato);


// const tue =fs.readFileSync('../modulos2/data/dato.txt');
// console.log(tue.toString());

//crea un archivo y inserta un contenido
// const n = "sad"
// fs.writeFileSync('../modulos2/data/tercero.js',n)

//crea un archivo y añade un contenido

// const hola =`1 \n`;

// fs.writeFileSync('../modulos2/data/tercero.js',hola ,{
//     flag: 'a',
// });

// let variablesOs={

//     memoriaDisponible:os.freemem,
//     sistemaOperativo:os.version,
//     usuario :os.userInfo,
//     ram :os.totalmem

// }

// fs.writeFileSync("data/tercero.js",`${variablesOs.memoriaDisponible} \n ${variablesOs.sistemaOperativo} \n ${variablesOs.usuario}
// \n ${variablesOs.ram}`)


let obj={
    memoriaDisponible:os.freemem,
    ram:os.totalmem,
    sistemaOperativo:os.version,
    usuario :os.type,

}

fs.writeFileSync("data/terceros.js",`${obj.memoriaDisponible} \n ${obj.ram} \n${obj.sistemaOperativo}
\n${obj.usuario}`)


for (i=1;i<=10,i++;) {
    fs.appendFileSync('../modulos2/data/numero.txt',`${i}\n`) ;
}













