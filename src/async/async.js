async function hola(nombre) {
    return new Promise(
        function (resolve, reject) {
            setTimeout(function () {
                console.log("Hello, " + nombre);
                resolve(nombre);
            }, 1000);
        }
    );
}

async function hablar(nombre) {
    return new Promise(
        function (resolve, reject) {
            setTimeout(function () {
                console.log(nombre + " bla, bla, bla, bla");
                resolve(nombre);
            }, 1000);
        }
    );
}

async function adios(nombre) {
    return new Promise(
        function (resolve, reject) {
            setTimeout(function () {
                console.log("Adios " + nombre);
                resolve(nombre);
            }, 1000);
        }
    );
}

async function main() {
    let nombre = await hola("Pablo");
    await hablar(nombre);
    await hablar(nombre);
    await hablar(nombre);
    await adios(nombre);
    console.log("Fin del proceso");
}

main();