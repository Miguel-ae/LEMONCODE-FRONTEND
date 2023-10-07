//01 ARRAY OPERATIONS

const array: number[] = [1, 2, 3, 4, 5]

// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = ([first] : number[]) => {
    return first;
}
console.log(`Head: ${head(array)}`);



// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([, ...rest] : number[]) => {
    return rest;
}
console.log(`Tail: ${tail(array)}`);



// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (array : number[]) => {
    return array.slice(0,-1);
}
console.log(`Init: ${init(array)}`);



// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (array : number[]) => {
    return array[array.length - 1];
}
console.log(`Last: ${last(array)}`);






//02 CONCAT

//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const weekdays: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const weekend: string[] = ['Sábado', 'Domingo'];
const months: string[] = ['Agosto', 'Septiembre', 'Octubre'];

const concat = (a: string[], b: string[]) => {
    return [...a, ...b];
}
console.log(`Concat Arrays: ${concat(weekdays, weekend)}`);


// Opcional
// Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat.

const concatMultiple = (...arrays : string[]) => {
    return [...arrays];
};
console.log(`Concat Multiples Arrays: ${concatMultiple(...weekdays, ...weekend, ...months)}`); //Se podria hacer con un bucle FOR






// 03 CLONE MERGE

// Clone
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

const obj = {
    nombre: 'Leire',
    edad: 25,
    direccion: {
      calle: 'Calle de Pagola',
      ciudad: 'Guipúzcoa',
      codigoPostal: '01337'
    },
    amigos: ['Miguel', 'Jone', 'Uxue']
  };

function clone(source: object) {
    const copyObject = Object.assign({}, source);
    return copyObject;
  }

console.log(`Clone: ${JSON.stringify(clone(obj))}`);


// Merge
/* Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source,
 y en caso de propiedades con el mismo nombre, source sobreescribe a target. Por ejemplo, dados estos 2 objetos: */
  
const a = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
const b = { name: 'Luisa', age: 31, married: true };

function merge(source: object, target: object) {
    const mergeObject = Object.assign({}, source, target);
    return mergeObject;
  }

console.log(`Merge: ${JSON.stringify(merge(a, b))}`);






// 04 READ BOOKS

// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.
// Un libro es un objeto con title como string y isRead como booleano. 
// En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.

const books = [
    { title: 'Harry Potter y la piedra filosofal', isRead: true },
    { title: 'Canción de hielo y fuego', isRead: false },
    { title: 'Devastación', isRead: true },
  ];

  function isBookRead(books: {title: string; isRead: boolean }[], titleToSearch: string) {  //Se podría hacer mediante interfaces también
    for (let i = 0; i < books.length; i++) {
      if (books[i].title === titleToSearch) {
        return books[i].isRead;
      }
    }
    return false;
  }
  
  console.log(isBookRead(books, 'Devastación')); // true
  console.log(isBookRead(books, 'Canción de hielo y fuego')); // false
  console.log(isBookRead(books, 'Los Pilares de la Tierra')); // false  






// 05 SLOT MACHINE
/*
El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. 
Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

Cuando se llame al método play el número de monedas se debe incrementar de forma automática
y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas.
El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:
*/

class SlotMachine {

    private coins: number = 0;
  
    private spinRoulette(): [boolean, boolean, boolean] {
        const roulette1 = Math.random() < 0.5;
        const roulette2 = Math.random() < 0.5;
        const roulette3 = Math.random() < 0.5;
        return [roulette1, roulette2, roulette3];
    }
  
    play() {
        this.coins++;

        const results = this.spinRoulette();
        if(results[0] && results[1] && results[2]) {
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
        } else {
            console.log('Good luck next time!!');
        }
    }
}
  
const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();