/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function trovaVocali(parola) {
    
    // Scriviamo la funzione che ci conta le vocali
    function contaVocali(stringa) {
       
        // Definiamo le costanti
        const vocali = ['a', 'e', 'i', 'o', 'u'];
        let conteggio = 0;
    
        // Convertimo la stringa onnminuscolo per evitare problemi
        stringa = stringa.toLowerCase();
    
        // Verifichiamo che l elemento stringa include elementi dell' array vocali
        for (let i = 0; i < stringa.length; i++) {
           
            // se include elemeti allora aumenta il conteggio
            if (vocali.includes(stringa[i])) {
                conteggio++;
            }
        }
    
        return conteggio;
    }
    
    return contaVocali(parola);
}

// Invoca la funzione qui e stampa il risultato in console

// console.log(trovaVocali())
console.log(trovaVocali(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)