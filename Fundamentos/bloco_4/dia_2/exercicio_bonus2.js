let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i += 1) {
  for (let secondIndex = 0; secondIndex < i; secondIndex += 1) {
    if (numbers[i] > numbers[secondIndex]) {
      let maior = numbers[i];
      numbers[i] = numbers[secondIndex];
      numbers[secondIndex] = maior;
    }
  }
}
console.log (numbers);