 // Utilizzando const e/o let e template literal. Creare due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

let arrayNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arrayNumeri.length; i++) {
  if (arrayNumeri[i] % 2) {
    document.getElementById('red').innerHTML += `
      ${arrayNumeri[i]}<br>`;
  }
  else {
    document.getElementById('green').innerHTML += `
      ${arrayNumeri[i]}<br>`;
  }
}
