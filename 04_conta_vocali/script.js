/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function trovaVocali(parola) {
    
    function contaVocali(stringa) {
       
        const vocali = ['a', 'e', 'i', 'o', 'u'];
        
        let conteggio = 0;
    
        stringa = stringa.toLowerCase();
    
        for (let i = 0; i < stringa.length; i++) {
           
            if (vocali.includes(stringa[i])) {
                conteggio++;
            }
        }
    
        return conteggio;
    }
    

    

    
    
}

// Invoca la funzione qui e stampa il risultato in console

console.log(trovaVocali(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)