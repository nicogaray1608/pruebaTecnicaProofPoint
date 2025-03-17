class Libro {
    constructor(titulo, autor, publicacion){
        this.titulo = titulo;
        this.autor = autor || "Autor Desconocido";
        this.publicacion = this.validarPublicacion(publicacion);
        this.publicacion= publicacion === 0 ? "No especificado" : publicacion;
    }

    validarPublicacion(añoDePublicacion){
        const añoActual = new Date().getFullYear();
        if (isNaN(añoDePublicacion) || añoDePublicacion < 1000 || añoDePublicacion > añoActual){
            return 0;
        }
        return añoDePublicacion;

    }
}

module.exports = Libro;