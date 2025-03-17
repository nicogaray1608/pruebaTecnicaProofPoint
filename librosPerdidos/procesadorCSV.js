const fs = require('fs');
const csv = require ('csv-parser');
const Libro = require ('./libros');

function parsearAño(año){
    const añoParseado= parseInt(año)
    console.log(añoParseado)
    console.log(año)

    if (isNaN(añoParseado) || añoParseado <= 0 || añoParseado > new Date().getFullYear()) {
        return 0; 
      }
      return añoParseado;
}

function procesarCSV(ruta){
    const libros = new Set()
    fs.createReadStream(ruta)
        .pipe(csv())
        .on('data', (row)=>{
            const autor = row.Autor;
            const titulo = row.Titulo;
            const publicacion = parsearAño(row["Año de publicación"])

            console.log("Autor: ", autor, "titulo: ", titulo, "año: ", publicacion)
            const libro = new Libro(titulo,autor,publicacion);
            libros.add(JSON.stringify(libro));
        })
        .on('end', ()=>{
            console.log('csv procesado con éxito');
            console.log(libros);
        });
}

module.exports = procesarCSV;