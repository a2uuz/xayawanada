/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, goobta, Dada, and photo
*/

const pets = [
  {
    name: 'Dhinbiil',
    type: 'Ay',
    goobta: 'Usturaaliya',
    Dada: 8,
    photo: 'img/aussie.jpg'
  },
  { 
    name: `Faa'Dhugle`,
    type: 'Bisad',
    goobta: 'Hargaysa',
    Dada: 1,
    photo: 'img/tabby.jpg'
  },
  { 
    name: 'Kuusow',
    type: 'Ay',
    goobta: 'Maraykanka',
    Dada: 6,
    photo: 'img/pug.jpg'
  },
  { 
    name: 'Bisle',
    type: 'Bisad',
    goobta: 'Faaris',
    Dada: 5,
    photo: 'img/persian.jpg'
  },
  { 
    name: 'Colhaye',
    type: 'Ay',
    goobta: 'Shiinaha',
    Dada: 3,
    photo: 'img/golden.jpg'
  }
];

let html = '';
let main = document.querySelector('main');
for (let i = 0; i < pets.length; i++) {
  let xayawan = pets[i];

html += `
      <h2>${xayawan.name}</h2>
      <h3>${xayawan.type} | ${xayawan.goobta}</h3>
      <p> Dada: ${xayawan.Dada}</p>
      <img src=${xayawan.photo} alt=${xayawan.goobta}>
`;

}
main.innerHTML = html;
