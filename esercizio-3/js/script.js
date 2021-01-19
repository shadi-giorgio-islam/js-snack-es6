// Utilizzando const e/o let. Dare la possibilità di inserire due parole. Verificare se le due parole hanno la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

let parola1 = prompt('inserisci parola');
let parola2 = prompt('inserisci parola');

if (parola1.length > parola2.length) {
  console.log(parola1);
}
else if (parola2.length > parola1.length) {
  console.log(parola2);
}
else {
  console.log(parola1, ' ', parola2);
}
