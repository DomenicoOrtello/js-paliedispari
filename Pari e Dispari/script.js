//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri.
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
//Dichiariamo chi ha vinto.

// L'utente sceglie tra pari o dispari
const sceltaUtente = prompt("Scegli tra pari o dispari!");

// L'utente sceglie un numero (da 1 a 5)
const numeroUtente = Number(prompt("Scegli un numero da 1 a 5!"));

//Creare la funzione per generare un numero random per la cpu (da 1 a 5)
function generareNumeroCpu() {
    const numeroCpu = Math.floor(Math.random() * 5) + 1;
    return numeroCpu;
}
// Salvo il valore restituito dalla funzione in una variabile
const numeroCpu = generareNumeroCpu()

// Mostro il numero della Cpu
alert("Il numero della Cpu è: " + numeroCpu);

//Sommiamo i due numeri
const sommaNumeri = numeroCpu + numeroUtente;
alert ("La somma dei numeri è: " + sommaNumeri);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function stabilirePariDispari(numero) {
    if (numero % 2 === 0) {
        return "pari";
        } else
        return "dispari";
}
alert ("La somma dei numeri è " + stabilirePariDispari(sommaNumeri) + ".");

//Dichiariamo chi ha vinto
if (stabilirePariDispari(sommaNumeri) === sceltaUtente.toLowerCase()) {
    alert("Hai vinto!");
    } else {
        alert("Hai perso!");
}


    