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


const button = document.querySelector('button');
const casualNumbers = [];

button.addEventListener('click', function(){

    let nElement = document.getElementById('n-element').value;
    console.log(nElement.value);

    let nPrintElement = document.getElementById('n-print-element');
    console.log(nPrintElement.value);

    for (let i = 0; i <= nElement; i++){
        casualNumbers.push(getRndInteger(1,100));
        console.log(casualNumbers);
    } 
    document.body.innerHTML += `gli ultimi 5 numeri: ${casualNumbers.slice(-5)}`; 
});



