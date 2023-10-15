//ARRAY TAIL
    //creiamo un input text sull'html
    //creiamo l'utility di numeri casuali
    //chiediamo all'utente quanti numeri vuole 
    //stampiamo gli ultimi 5 numeri

//utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//prendiamo il value delle caselle input
const nElement = document.getElementById('n-element').value;
const nPrintElement = document.getElementById('n-print-element').value;
const button = document.querySelector('button');



//CONSOLE LOG
console.log(nElement);
console.log(nPrintElement);
console.log(button);