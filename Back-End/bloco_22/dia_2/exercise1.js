function exerciseOne(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      reject(new Error('Informe apenas números'));
    }
    const result = (num1 + num2) * num3;

    if (result < 50) {
      reject(new Error('Valor muito baixo'));
    }

    resolve(result);
  })
  return promise;
}

const firstNumber = Math.floor(Math.random() * 100 + 1);
const secondNumber = Math.floor(Math.random() * 100 + 1);
const thirdNumber = Math.floor(Math.random() * 100 + 1);

exerciseOne(firstNumber, secondNumber, thirdNumber)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));
