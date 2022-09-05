
//Esto es para saber la plataforma del sistema operativo y
// version

/*const os = require('os');
console.log(os.platform());
console.log(os.release());*/ 

 
//Esto permite trabajar con los archivos que tenemos en el sistema 

//const fs = require('fs');
/*fs.writeFile('text.txt','linea uno',function (err) {
    if (err) {
        console.log(err);
    }
    console.log('archivo creado')
});

console.log('ultima linea de codigo');*/

//esto de arriba es para crear un archivo y explicar la asincronia 
//de node y el uso de la callback en este caso el console ultimo se 
//ejecuta primero pq el otro se queda esperando a que se cree el 
//archivo funcion de la callback

/*fs.readFile('text.txt',function (err, data) {
    if (err) {
        console.log(err)
    }
    console.log(data.toString())
})*/ 
//fs.readFile es para leer un achivo

// Esto es para crear un servidor http

const http = require('http');

const handleServer= function (req, res) {
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write('<h1>hola mundo </h1>');
    res.end()
};

const server = http.createServer(handleServer);
server.listen(3000,function () {
    console.log('Server on port 3000')
    
})

//.listen hace que ejecute mi servidor en el puerto 3000
//cuando haces un cambio en la respuesta no se cambia en el navegador
//pq el servidor una vez inicializado se queda con el 1er codigo
//hay q parar la ejecucion y volver a correrlo