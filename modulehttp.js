/*const http =require('http');
const fs= require('fs');

const host ='localhost';
const port = 3000;

http.createServer((request, response)=>{
    if (request.url ==='/home') {
    response.write(fs.readFileSync('./modulos2/pagina.html','uft-8'))
    
        return response.end();
    }

// return response.end("mi servidor");

if (request.url === '/') {
    response.write('inicio de proyecto');
    return response.end()
    
}

}).listen(port, host, ()=>{
    console.log(`server is runing on http://${host}:${port}`);
})


// .listen(port)*/

const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 3000;

http.createServer((reques,response) =>{
    if (reques.url === '/home') {
        response.write(fs.readFileSync('./pagina.html','utf-8')
        )
        return response.end();
    }

    if (reques.url === '/'){
    response.write('inicio de proyecto');
    return response.end()
    }


}).listen(port, host, () => {
    console.log(`Server is runing on http://${host}:${port}`)
});