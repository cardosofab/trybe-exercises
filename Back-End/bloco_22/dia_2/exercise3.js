async function exerciseThree(num1, num2, num3) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
    return ('Informe apenas números');
  }
  const result = (num1 + num2) * num3;

  if (result < 50) {
    return ('Valor muito baixo');
  }

  return result;
}

const firstNumber = Math.floor(Math.random() * 100 + 1);
const secondNumber = Math.floor(Math.random() * 100 + 1);
const thirdNumber = Math.floor(Math.random() * 100 + 1);

try {
  const result = await exerciseThree(firstNumber, secondNumber, thirdNumber)
  console.log(result);
} catch (err) {
  console.error(err);
}