// jsnack 2
// Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente
// Usiamo i nuovi metodi degli array foreach o filter
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num1Input = parseInt(prompt('inserisci valore più piccolo'));
const num2Input = parseInt(prompt('inserisci valore più grande'));
const newNumeri = [];

// ESERCIZIO CON FOREACH
numeri.forEach((item, i) => {
  if (item > num1Input && item < num2Input) {
    newNumeri.push(item);
  }
});

console.log(newNumeri);

// ESERCIZIO CON FILTER
const nuovoArray = numeri.filter((item) => {
return item > num1Input && item < num2Input;
});
console.log(nuovoArray);
