const convertFahernheitToCelsius = temp => {
	let celsius = ((temp - 32) * 5) / 9;
	if (celsius <= 0) {
		let isFreezing = true;
	}
	return celsius;
};
let tempOne = convertFahernheitToCelsius(32);
let tempTwo = convertFahernheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);
