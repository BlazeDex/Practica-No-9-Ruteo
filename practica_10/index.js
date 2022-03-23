var express = require('express'); //Se importa el módulo.
var app = express(); //Se declara la variable app para almacenar Express.

var port = process.env.PORT || 3000; //Colocamos el puerto para nuestro servidor.

//Creando la primera ruta (a nivel raíz '/'), Hello World!
app.get('/', function (req, res) {
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.listen(port); //Activando el servidor y colocarlo a la escucha.

//Creando una segunda ruta "/api", la cual regresa un objeto JSON.
app.get('/api', function (req, res) {
    res.json({ firstName: 'Alan', lastName: 'Hernández'});
});

//Creando una tercera ruta, la cual recibe un parámetro.
app.get('/person/:id', function (req, res) {
    //La colección Params nos devuelve a la "persona" que colocamos en la raíz de "api".
    res.send(`<html><head></head><body><h1>Person: ${req.params.id} </h1></body></html>`);
});