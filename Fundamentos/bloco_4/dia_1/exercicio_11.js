let salarioBruto = 3000;
let aliquotaMaxima = salarioBruto - 570.88;
let aliquota11 = (salarioBruto*0.11);
let aliquota9 = (salarioBruto*0.09);
let aliquota8 = (salarioBruto*0.08);


if (salarioBruto>5189.82 && salarioBruto-570.88>4664.68) {
  let salarioBase = salarioBruto - 570.88;
  let salarioLiquido = salarioBase - (salarioBase*0.275) + 869.36;
  console.log(salarioLiquido);
} else if (salarioBruto>5189.82 && salarioBruto-570.88>=4618.95) {
  let salarioBase= salarioBruto - 570.88;
  let salarioLiquido = salarioBase - (salarioBase*0.225) + 636.13;
  console.log(salarioLiquido);
} else if (salarioBruto>=2594.93 && salarioBruto-(aliquota11)>=3751.06) {
  let salarioBase = salarioBruto - aliquota11;
  let salarioLiquido = salarioBase - (salarioBase*0.225) + 636.13;
  console.log(salarioLiquido); 
} else if (salarioBruto>=2594.93 && salarioBruto-(aliquota11)>=2826.66) {
  let salarioBase = salarioBruto - aliquota11;
  let salarioLiquido = salarioBase - (salarioBase*0.15) + 354.80;
  console.log(salarioLiquido);
} else if (salarioBruto>=2594.93 && salarioBruto-(aliquota11)>=1903.99) {
  let salarioBase = salarioBruto - aliquota11;
  let salarioLiquido = salarioBase - (salarioBase*0.075) + 142.80;  
  console.log(salarioLiquido);
} else if (salarioBruto>=1556.95 && salarioBruto-aliquota9>=1903.99) {
  let salarioBase = salarioBruto - aliquota9;
  let salarioLiquido = salarioBase - (salarioBase*0.075) + 142.80;
  console.log(salarioLiquido);
} else if (salarioBruto>=1556.95 && salarioBruto-aliquota9<=1903.98) {
  let salarioLiquido = salarioBruto - aliquota9;
  console.log(salarioLiquido);
} else if (salarioBruto<=1556.94 && salarioBruto>=0) {
  let salarioLiquido = salarioBruto - (salarioBruto*aliquota8);
  console.log(salarioLiquido);
} else {
  console.log("Valor inválido");
}
