let myAccount = {
	name: "Elbert",
	expenses: 0,
	income: 0,
};

let addExpense = (account, amount) => (account.expenses += amount);
let addIncome = (account, amount) => (account.income += amount);

let resetAccount = account => {
	account.expenses = 0;
	account.income = 0;
};

let getAccountSummary = ({ name, expenses, income }) => {
	let balance = income - expenses;
	return `${name} has $${balance}. Income of $${income} and Expenses of $${expenses}.`;
};

addExpense(myAccount, 2.5);
addIncome(myAccount, 2000);
addExpense(myAccount, 160);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
