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
  console.log(soma);

  if (soma > 8000) {
    return reject(soma)
  }
  resolve(soma);
})
.then(soma => console.log(`A promise foi resolvida. A soma é ${soma}`))
.catch(soma => console.log(`A promise foi rejeitada. A soma é ${soma}`));