
let n = 5;
let asterisco = '*';
let espacoBranco= '';
let numeroAtual = n;

for (let linha = 0; linha < n; linha += 1) {
  for (let coluna = 0; coluna <= n; coluna += 1) {
    if (coluna < numeroAtual) {
      espacoBranco= espacoBranco+ ' ';
    } else {
      espacoBranco= espacoBranco+ asterisco;
    }
  }
  console.log(espacoBranco);
  espacoBranco= '';
  numeroAtual -= 1;
};
