
// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.
// 3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// **BONUS
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// MILLESTON 1 
// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

// const numbers  = ["0", "1", "2", "3", "4", "5", "6", "7", "10", "9",];

// const menoNumeri = ["macchina", "casa", "ruota", "sasso",];


// let numbersIndex = 0;
// numbers.forEach((element, index)=>{
//     numbersIndex = index;
// });
// console.log(numbersIndex);

// let menoNumeriIdex = 0;
// menoNumeri.forEach((element, index)=>{
//     menoNumeriIdex = index;
// });
// console.log(menoNumeriIdex);

//  const differenrzaArray = (numbersIndex - menoNumeriIdex );
//  console.log(differenrzaArray);

// let i = 0;
// do{
//     menoNumeri.push(randomNumbers(1, 10));
//     i++
// }while (i < differenrzaArray);

// console.log(menoNumeri);


// function randomNumbers(min, max){
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// MILLESTON 2
// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.




const array = [10,12,3];
console.log(array)

let laSomma = 0;
let i = 0;

do{
    
    const askClient = parseInt(prompt(`Dimmi un numero`));
    array.push(askClient);
     laSomma = theSum(array)
    laSomma++;
    }while (laSomma <= 50 );
    
    console.log(laSomma)


function theSum(allNumbers){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        let numbers  = array[i];
        sum = sum + numbers
    }
    return sum;
}

// array.forEach((element, index)=>{
//     element[i] = element;
//     console.log(element);
//     // numbers += element 
//     // console.log(numbers)
// });
// console.log(numbers);






