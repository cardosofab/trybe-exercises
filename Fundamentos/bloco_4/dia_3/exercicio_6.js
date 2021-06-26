let numero = 11;
let quantidadeDivisores = 0;

for (let i = 1; i <= numero; i += 1) {
  let resultado = numero % i;
  if (resultado === 0) {
    quantidadeDivisores += 1;
  } 
  
  
}
if (quantidadeDivisores === 2 || numero === 1) {
  console.log(numero + " é primo.");
} else {
  console.log(numero + " não é primo.");
}