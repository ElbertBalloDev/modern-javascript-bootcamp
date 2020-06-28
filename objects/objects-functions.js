const book = {
	title: "1984",
	author: "George Orwell",
	pageCount: 326,
};

const otherBook = {
	title: "A People's History",
	author: "Howard Zinn",
	pageCount: 723,
};

const getSummary = ({ title, author, pageCount }) => {
	return {
		summary: `${title} is written by ${author}.`,
		pageCountSummary: `${title} is ${pageCount} pages long.`,
	};
};

let bookSummary = getSummary(book);
console.log(bookSummary.summary);
console.log(bookSummary.pageCountSummary);

bookSummary = getSummary(otherBook);
console.log(bookSummary.summary);
console.log(bookSummary.pageCountSummary);

const convertFarenheit = temp => {
	return {
    fahrenheit: temp,
		celsius: ((temp - 32) * 5) / 9,
		kelvin: ((temp - 32) * 5) / 9 + 273.15,
	};
};
console.log(`Fahrenheit`, convertFarenheit(32).fahrenheit);
console.log(`Celsius`, convertFarenheit(32).celsius);
console.log(`Kelvin`, convertFarenheit(32).kelvin);