// Ex 1
// Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.

const numeros = [1, 2, 3, 4] 
const quadrat = numeros.map(num => num ** 2)

// Ex 2
// Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.

const numeros2 = [1, 2, 3, 4]
const parells = numeros2.filter(par => par % 2 === 0)

// Exercici 3
// Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.

const numeros3 = [1, 10, 8, 11]
const major = numeros3.find(num => num > 10)

// Exercici 4
// Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números

const numeros4 = [13, 7, 8, 21]
const suma = numeros4.reduce((acc, curr) => acc + curr, 0)

// Exercici 5
// Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:
// - Filtra els nombres majors o iguals a 10.
// - Multiplica cada nombre filtrat per 2.
// - Calcula la suma dels nombres filtrats i multiplicats per 2.
// - La funció ha de retornar el resultat de la suma.

const array = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]

const total = 
array.filter((majors) => majors >= 10)
.map(num => num * 2)
.reduce((acc, curr) => acc + curr, 0)

// console.log(total);

// Exercici 6
// Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament

const arr = [11, 12, 13, 14]

const every = arr.every(ev => ev > 10)
const some = arr.some(so => so > 10)
