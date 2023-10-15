//PASSAGGI ARRAY-LISTA
    //creiamo un array con la lista della frutta che è in frigo
    //aggiungiamo la pesca con push all'array
    //con ciclo for verifichiamo che ci sia il cocomero
    //stampare frase sul cocomero

//creiamo array
const fruits = [
    'banana', 
    'mela', 
    'pera', 
    'ciliegia', 
    'arancia', 
    'mandarino', 
    'cocomero', 
    'limone', 
    'fragola'  
];
//vediamo l'array sul console log
console.log(fruits);
//aggiungiamo la pesca all'array
fruits.push('pesca');
//verifichiamo se la pesca è stata inserita
console.log(fruits);
//aggiungiamo variabile booleana
let founded = false;
//verifichiamo che il cocomero sia dentro l'array
for (let i = 0; i < fruits.length; i++){
    if(fruits [i] == 'cocomero'){
        founded = true;
    }
}
//stampiamo il messaggio se trova il cocomero
if(founded){
    document.body.textContent += ('ci sta il cocomero');
    console.log('ci sta il cocomero');
} else{
    document.body.textContent += ('non ci sta il cocomero');
    console.log('non ci sta il cocomero');
}
