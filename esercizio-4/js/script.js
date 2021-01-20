// jsnack 1
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

const bici = [
  {
    nome: 'bici1',
    peso: 10
  },
  {
    nome: 'bici2',
    peso: 5
  },
  {
    nome: 'bici3',
    peso: 18
  }
];

bici.forEach((element,index) =>{
  const [bici1] = bici;
  let pesoMinore = bici1.peso;
  if (element.peso <= pesoMinore) {
    pesoMinore = element.peso;
    document.getElementById('text').innerHTML= `la ${element.nome} ha il peso minore`;
  }
});
