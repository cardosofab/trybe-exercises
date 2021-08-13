// Crie uma promise em que tenha uma array com 10 numeros aleatorios de 1 a 50 e eleve cada um ao quadrado e soma todos ao final. Caso a soma seja inferior a 8000, promise deverá ser resolvida, caso contrario, promise será rejeitada.

const promise = new Promise((resolve, reject) => {
  const arrayNumbers = [];
  for (let index = 0; index < 10; index += 1) {
    const number = Math.floor(Math.random() * 51);
    arrayNumbers.push(number);
    if (index === 9) {
      console.log(arrayNumbers);
      for (let i = 0; i < arrayNumbers.length; i += 1) {
        arrayNumbers[i] *= arrayNumbers[i];
      }
    }
  }
  console.log(arrayNumbers);
  const soma = arrayNumbers.reduce((valorInicial, currentValue) => valorInicial + currentValue);
  if (soma > 8000) {
    return reject(soma)
  }
  resolve(soma);
})
.then(soma => {
  const array = [2, 3, 5, 10];
  return array.map((divisor) => Math.round(soma / divisor));
})
.then((array) => console.log(`A array com a soma dividida por 2, 3, 5 e 10 é: [${array}]`))
.catch(soma => console.log(`É mais de oito mil! Essa promise deve estar quebrada! A soma é ${soma}`));