// 1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

// Modifique a estrutura da função para que ela seja uma arrow function .

// Modifique as concatenações para template literals .

/* function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);  */

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    // ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);
 
// 2. Copie o código abaixo e faça uma função que retorne o array array em ordem crescente.

// Utilize template literals para que a chamada console.log(<seu código>array<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = array => {
  let maior = 0;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[j] > array[j+1]) {
        maior = array[j];
        array[j] = array[j+1];
        array[j+1] = maior;  
      }
    }
  }
  console.log(`Os números ${array} se encontram ordenados de forma crescente`); 
}

oddsAndEvens([13,3,4,10,7,2]);

// Parte II

// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .

// Crie uma função que receba um número e retorne seu fatorial.

// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

const fatorial = number => {
  let resultado = 1;
  for (let index = 1; index <= number; index += 1) {
    resultado *= index;
  }
  return resultado;
}

console.log(fatorial(0));

//2. Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = frase => {
  const arrayPalavras = frase.split(' ');
  let maior = 0;
  let maiorPalavra = '';
  for (let index = 0; index < arrayPalavras.length; index += 1) {
    if (arrayPalavras[index].length > maior) {
      maior = arrayPalavras[index].length;
      maiorPalavra = arrayPalavras[index];    
    }
  }
  return maiorPalavra;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'

