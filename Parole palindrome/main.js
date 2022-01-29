//Chiedo all'utente di inserire una parola
let parola = prompt('Inserisci una parola');
//Confronto che la parola invertita sia uguale alla parola che vado ad inserire
let parolaInversa = invertiParola(parola);
//Cosa faccio se la parola è palindroma oppure no
if(parola == parolaInversa){
    alert('la parola è palindroma');
  } else {
    alert('la parola non è palindroma');
}
//Funzione per verificare se la parola è palindroma
function invertiParola(frase){
  let parolaInversa = frase.split('').reverse().join('');  
  console.log(parolaInversa)
  return parolaInversa;
}
