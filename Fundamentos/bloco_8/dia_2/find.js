// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  // Adiciona seu código aqui
  if (number % 15 === 0) {
    return true;
  }
  return false;
}

console.log(numbers.find(findDivisibleBy3And5));

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (nome) => {
  // Adicione seu código aqui:
  if (nome.length === 5) {
    return true;
  }
  return false;
}

console.log(names.find(findNameWithFiveLetters));

// 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

// function findMusic(musica, id) {
//   // Adicione seu código aqui
//   if (musica.id === id) {
//     return true;
//   }
//   return false;
// }

function findMusic(id) {
  return musicas.find((musica) => musica.id === id);
}
console.log(findMusic('31031685'));