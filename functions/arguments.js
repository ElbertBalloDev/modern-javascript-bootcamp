let add = (a, b, c) => a + b + c;

let result = add(10, 1, 5);
console.log(result);

let getScoreText = (name = "Anonymous", score = 0) => `Name: ${name} - Score: ${score}`;

let score = getScoreText(undefined, 99);
console.log(score);

const tipCalc = (total, tipPercent = 0.2) => {
	let percent = tipPercent * 100;
	let tip = total * tipPercent;
	return `A ${percent}% tip on a $${total} would be $${tip}`;
};

let tip = tipCalc(60);
console.log(tip);

let name = "Jen";
let age = 12;
console.log(`Hey, my name is ${name}! I am ${age} years old.`);
