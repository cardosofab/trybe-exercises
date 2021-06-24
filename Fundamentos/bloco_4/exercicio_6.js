let entrada = "chru";
let peca = entrada.toLowerCase();

switch (peca) {
  case "peão":
  console.log("É possível andar apenas uma casa para frente, duas se for a primeira jogada do peão. É possível comer peça na diagonal andando uma casa.");  
  break;

  case "torre":
  console.log("Só pode andar na vertical ou horizontal, quantas casas quiser.");
  break;
  
  case "bispo":
  console.log("Anda apenas na diagonal, quantas casas quiser");
  break;
  
  case "cavalo":
  console.log("Anda em forma de L");
  break;
  
  case "rainha":
  console.log("Anda em todas as direçoes quantas casas quiser")  ;
  break;

  case "rei":
  console.log("Anda em todas as direções apenas uma casa");
  break;
  
  default:
   console.log("Não é uma peça de xadrez") 
}
