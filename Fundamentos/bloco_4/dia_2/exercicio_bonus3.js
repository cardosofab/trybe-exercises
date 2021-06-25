let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (let i = 0; i<numbers.length; i+=1) {
  if (i == numbers.length-1) {
    let lastNumber = 0;
    lastNumber = numbers[numbers.length-1]*2;
    newNumbers.push(lastNumber);
  } else {
    let elements = 0;
    elements = numbers[i]*numbers[i+1];
    newNumbers.push(elements);
  }
}
console.log(newNumbers);



