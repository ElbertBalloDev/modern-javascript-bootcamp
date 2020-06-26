const greetUser = function (user) {
  console.log(`Hello, ${user}`);
};

greetUser("Elbert");
greetUser("Mike");
greetUser("John");

let square = function (num) {
  return num * num;
};

const arrowSquare = (num) => num * num;

console.log(square(4));
console.log(arrowSquare(12));

const convertFahernheitToCelsius = temp => ((temp - 32) * 5) / 9;

console.log(convertFahernheitToCelsius(32));
console.log(convertFahernheitToCelsius(68));
console.log(convertFahernheitToCelsius(50));
