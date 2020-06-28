const myBook = {
	title: "1984",
	author: "George Orwell",
	pageCount: 326,
};

console.log(`${myBook.title} by ${myBook.author}.`);

myBook.title = "Animal Farm";

console.log(`${myBook.title} by ${myBook.author}.`);

const person = {
	name: "Elbert",
	age: 34,
	location: "Garden Grove",
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);

person.age++;

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);