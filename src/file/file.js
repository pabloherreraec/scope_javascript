const fs = require('fs');

/**
 * Funcion para leer e imprimir en 
 * pantalla el contenido de un archivo
 */
function leer(ruta, miCallback) {

    console.log(`La ruta es ${ruta}`);

    // Lee el archivo
    fs.readFile(ruta, (err, data) => {

        // Verfica que si hay error y lo imprime
        if (err)
            console.log(err);
        else // Si no hay error imprime en pantalla
            console.log(data.toString());

    });
}

/**
 * Funcion para leer e imprimir en 
 * pantalla el contenido de un archivo
 */
function escribir(ruta, contenido, miCallback) {

    console.log(`La ruta es ${ruta}`);

    // Escribe en el archivo
    fs.writeFile(ruta, contenido, (err, data) => {

        // Verfica que si hay algun error
        if (err)
            console.log(err);
        else // Si no hay error imprime en pantalla
            console.log("Se ha escrito correctamente");

    });
}

// Llama la la funcion para que lea el archivo.
leer(__dirname + "/archivo.txt", console.log);

// Llama la la funcion para que escriba un archivo.
escribir(__dirname + "/archivo1.txt", "contenido de nuevo archivo creado", console.log);
