let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantidadeNumeros = 0;
let soma = 0;
let media = 0;

for (let i=0; i<numbers.length; i+=1) {
  quantidadeNumeros += 1;
  soma += numbers[i];
}

media = soma/quantidadeNumeros;
console.log('A média é: ' + media);