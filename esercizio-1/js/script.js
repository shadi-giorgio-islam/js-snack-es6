 // Utilizzando const e/o let. Inserire un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.



let num = parseInt(prompt('Inserisci numero'));

if (num % 2) {
  num += 1;
  console.log(num);
}
else {
  console.log(num);
}
