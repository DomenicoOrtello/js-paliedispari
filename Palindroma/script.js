//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

// Chiedere all'utente di inserire la parola
const userWord = prompt ("Inserisci una parola!");

// Utilizzare una funzione per scrivere la parola al contrario
function reversedWord(userWord) {  
    let wordReversed = "";
    for (let i = userWord.length - 1; i >= 0; i--) {
        wordReversed = wordReversed + userWord[i];
    }
    return wordReversed;
}
console.log(reversedWord(userWord));

// Utilizzare una funzione per controllare se la parola inserita è palindroma
function isPalindrome(userWord) {
    const wordReversed = reversedWord(userWord);
    if (wordReversed === userWord) {
        return true;
    } else {
        return false;
    }
}

// Mostrare il risultato all'utente
if (isPalindrome(userWord)) {
    alert("La parola è palindroma!");
} else {
    alert("La parola non è palindroma!");
} 