let add = (a, b, c) => a + b + c;

let result = add(10, 1, 5);
console.log(result);

let getScoreText = (name = "Anonymous", score = 0) =>
  `Name: ${name} - Score: ${score}`;

let score = getScoreText(undefined, 99);
console.log(score);

const tipCalc = (total, tipPercent = .20) => `Tip: $${total * tipPercent}`; 
let tip = tipCalc(40, .05);
console.log(tip);