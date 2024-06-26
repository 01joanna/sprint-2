// ex 1 
// Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.

function processar(nombre, callback) {
    return callback(nombre)
}

// ex 2 
// Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.


function calculadora(a, b, callback) {
    return callback(a, b)
}

function suma(a, b) {
    const suma = a + b
    return suma
}

console.log(calculadora(4, 10, suma))

// ex 3
// Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.

function esperarISaludar(nombre, callback) {
    setTimeout(() => {
        callback(nombre)
    }, 2000 )
}

// ex 4
// Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback.La funció processarElements ha d'invocar la funció de callback per cada element de l'array.

function processarElements(arr, callback) {
    arr.forEach(element => {
        callback(element)
    });
}

processarElements([1, 2, 3, 4, 5], console.log)

// ex 5 
// Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.

function processarCadena(cadena, callback) {
    const mayus = cadena.toUpperCase()
    callback(mayus)
}