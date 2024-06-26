// ex 1
// Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.

function potConduir(edat) {
    return edat >= 18 ? "Pot conduir" : "No pot conduir";
}

let edat = 20
// console.log(potConduir(edat))

// ex 2
// Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.

let num1 = 2
let num2 = 6;

const gran = num1 > num2 ? "num1 és més gran" : "num2 és més gran"

// console.log(gran)

// ex 3
// Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.

const i = 4
const resultado = i > 0 ? "Positiu" : i < 0 ? "Negatiu" : "Zero"

// console.log(resultado);

// Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.

function trobarMaxim(a, b, c) {
    return a > b ? a > c ? 
    a : c : b > c ? b : c
}

// si a es mes gran que b, o a es mes gran que c, retorna a, sino b, si b es més gran que c retorna b, sino c.

const res = trobarMaxim(4, 5, 9);
// console.log(res)

// ex 4
// Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.

function parOImpar(nums) {
    nums.forEach(e => {
        e % 2 === 0 ? 
        console.log(`${e} es parell`) : console.log(`${e} es imparell`) 
    });
}

const nums = [55, 6, 5]
// parOImpar(nums)
