
// ex 1
// Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.

function add(a, b) {
    return a + b;
}

// ex 2
// Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.

function randomNumber() {
    return Math.floor(Math.random() * 101);
}

// ex 3
// Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.

class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hola, ${this.name}`);
    }
}

const alguien = new Person("Joanna")
alguien.greet();

// ex 4
// Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.

function printNumbers(nums) {
    for (let i = 0; i < nums.length; i++) {
        function result(num) {
            console.log(num)
        }
        result(nums[i])
    }
}
const numArray = [1, 2, 3, 4, 5];
printNumbers(numArray);

// ex 5
// Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.

function message() {
    setTimeout(() => {
        console.log("Mensaje nuevo, 3sec")
    }, 3000)
}
