const readline = require('readline-sync');

function typeNumber() {
  const number = readline.questionInt('Digite um número: ');
  if (number > 0) {
    return 'Positivo';
  } else if (number < 0) {
    return 'Negativo';
  } else {
    return 'Neutro';
  }
};

module.exports = {
  typeNumber,
}