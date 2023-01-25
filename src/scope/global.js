// variables

var a; //declaracion
var b = 'b'; // declaracion y asignacion
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion

// Global Scope
var fruit = 'Apple'; // global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia';
    console.log(country);
}

countries();
console.log(country);