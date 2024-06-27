// Exercici 1
// Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, món')
    }, 2000)
})


// Exercici 2
// Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.

promesa.then(total => {
            console.log(total)
        })
        .catch(error => {
            console.error(error.message)
        })

// Exercici 3
// Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.

const input = "Hola"
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (input === "Hola") {
            resolve("Este es el resolve, hola")
        } else {
            reject("Este es el reject, hola")
        }
    }, 2000 )
})


// Exercici 4
// Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.

async function esperar() {
    const total = await promesa
    return console.log(total)
}

// Exercici 5
// Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.

async function esperarAgain() {
    try {
        const total = await promesa
        return console.log(total)
    } catch (error) {
        console.error(error)
    }
}

// Exercici 6
// Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.

const dosSegundos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hola después de dos segundos")
    }, 2000)
})

const tresSegundos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hola después de tres segundos")
    }, 3000)
})

const todasPromesas = Promise.all([dosSegundos, tresSegundos]).then(todas => console.log(todas))