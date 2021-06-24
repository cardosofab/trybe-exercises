let valorDoCusto = 100 + (0.2*100);
let valorDaVenda = 250;

if (valorDoCusto<0 || valorDaVenda<0) {
  console.log("Valor inválido")
} else {
  lucro = valorDaVenda - valorDoCusto;
  console.log("O lucro será de " + lucro + " reais.");
}