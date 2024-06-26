// ex 1
// Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

const array1 = [1, 2, 3, 4]
const array2 = [5, 6, 7, 8]

const array3 = [...array1, ...array2]
// console.log(array3)

// ex 2
// Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

const nums = [1, 2, 3, 4, 5, 6, 7, 8]

function suma(...nums) {
    const res = nums.reduce((acc, curr) => acc + curr)
    // console.log(res)

}
suma(...nums)

// ex 3 
// Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

const objecte1 = {
    esto: 'es',
    un: 'objeto'
}
const objecte2 = {...objecte1,
esto: "es",
un: "añadido"}

// console.log(objecte1, objecte2)

// ex 4 
// Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.

const diversidad = [1, "diversos", 2, "elementos", 3, "en", 4, "un", 5, "array"]
const [uno, dos, ...rest] = diversidad

console.log(uno, dos, rest)

// ex 5
// Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.

function spread(a, b, c) {
    return a + " , " + b + " , " + c
}

const lenguajes = ["español", "ingles", "frances", "catalán", "chino"]
// console.log(spread(...lenguajes))

// ex 6
// Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.

const persona = {
    name: "Joanna",
    object: "table"
}

const elementos = {
    peliculas: 10,
    series: 25,
}

const fusion = {...persona, ...elementos}