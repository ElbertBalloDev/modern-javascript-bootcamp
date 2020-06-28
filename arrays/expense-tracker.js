const account = {
	name: "Elbert Ballo",
	expenses: [],
	income: [],
	addExpense: function (description, amount) {
		this.expenses.push({ description, amount });
	},
	addIncome: function (description, amount) {
		this.income.push({ description, amount });
	},
	getAccountSummary: function () {
		let expenseTotal = 0;
		let incomeTotal = 0;
		this.expenses.forEach(expense => (expenseTotal += expense.amount));
		this.income.forEach(income => (incomeTotal += income.amount));
		const balance = incomeTotal - expenseTotal;
		return `${this.name} has a balance of $${balance}. Total Expenses - $${expenseTotal}. Total Income - $${incomeTotal}`;
	},
};

account.addExpense("Rent", 950);
account.addExpense("Coffee", 2);
account.addIncome("Job", 1000);
console.log(account.getAccountSummary());
