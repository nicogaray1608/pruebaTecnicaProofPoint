const express = require('express');
const procesarCSV = require('./procesadorCSV');
const app = express()
const port = 3000;

app.get('/', (req, res)=> {
    res.send('Bienvenido, este el el catálogo digital de libros, el archivo está siendo procesado y el resultado se mostrará en consola')
    const ruta = './librosPrueba.csv'
    console.log("a punto de procesar :", ruta)
    procesarCSV(ruta)
    res.send('El archivo está siendo procesado')
});
app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`)
})