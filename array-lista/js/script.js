//PASSAGGI ARRAY-LISTA
    //creiamo un array con la lista della frutta che è in frigo
    //aggiungiamo la pesca con push all'array
    //con ciclo for verifichiamo che ci sia il cocomero
    //stampare frase sul cocomero

//creiamo array
const fruits = [
    'banana', 
    ' mela', 
    ' pera', 
    ' ciliegia', 
    ' arancia', 
    ' mandarino', 
    ' cocomero', 
    ' limone', 
    ' fragola'  
];
//aggiungiamo la pesca all'array
fruits.push(' pesca');
//stampiamo sul dom la frutta
document.body.innerHTML += `<h1>FRUTTA DEL FRIGO:</h1> ${fruits}!`;
//aggiungiamo variabile booleana
let founded = false;
//verifichiamo che il cocomero sia dentro l'array
for (let i = 0; i < fruits.length; i++){
    if(fruits [i] == ' cocomero'){
        founded = true;
    }
}
//stampiamo il messaggio se trova il cocomero
if(founded){
    document.body.innerHTML += `<strong> OTTIMO, 
        ci sta anche il cocomero!</strong>`
    console.log('ci sta il cocomero');
} else{
    document.body.innerHTML += `<strong> PECCATO, 
        manca il cocomero :(</strong>`
    console.log('non ci sta il cocomero');
}
