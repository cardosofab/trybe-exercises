// let n = 5;
// let espacoBranco = '';
// let asterisco = '*';
// let espaco = ' ';

// for (let i = 1; i<=n; i+=1) {
//   if (i%2!==0) {
//     espacoBranco += asterisco;
//     console.log(espacoBranco);
//     espacoBranco += asterisco;
    
//   }
// }

let n = 5;
let asterisco = '*';
let espacoBranco = '';

let meio = (n + 1) / 2;
let ladoEsquerdo = meio;
let ladoDireito = meio;

for (let lineIndex = 0; lineIndex <= meio; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > ladoEsquerdo && columnIndex < ladoDireito) {
      espacoBranco = espacoBranco + asterisco;
    } else {
      espacoBranco = espacoBranco + ' ';
    }
  }
  console.log(espacoBranco);
  espacoBranco = '';
  ladoDireito += 1;
  ladoEsquerdo -= 1
};