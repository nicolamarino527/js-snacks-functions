/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function estraiNome(names, iniziale) {

    let parolEstratte =[];

    for (let i = names.length - 1; i >= 0; i--) {
        if (names[i].charAt(0).toLowerCase() === iniziale.toLowerCase()){
            parolEstratte.push(names[i]);
            names.splice(i, 1);
        }
    }
    return parolEstratte;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(names);
console.log(estraiNome(names,"A"))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]