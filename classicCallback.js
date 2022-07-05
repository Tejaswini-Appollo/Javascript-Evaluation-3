function myDisplayer(something) {
  return `The sum calculation is ${something}.`;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  console.log(myCallback(sum));
}

myCalculator(5, 5, myDisplayer);