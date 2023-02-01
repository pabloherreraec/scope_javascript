function hola(nombre) {
    return new Promise(
        function (resolve, reject) {
            setTimeout(function () {
                console.log("Hello, " + nombre);
                resolve(nombre);
            }, 1000);
        }
    );
}

function hablar(nombre) {
    return new Promise(
        function (resolve, reject) {
            setTimeout(function () {
                console.log(nombre + " bla, bla, bla, bla");
                resolve(nombre);
            }, 1000);
        }
    );
}

function adios(nombre) {
    return new Promise(
        function (resolve, reject) {
            setTimeout(function () {
                console.log("Adios " + nombre);
                resolve(nombre);
            }, 1000);
        }
    );
}

console.log("Iniciando el proceso");
hola("Pablo")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .catch(error => { console.log("Ocurrió un error") });