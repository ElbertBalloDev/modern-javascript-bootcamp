const todos = [
	{
		task: "Groceries",
		completed: false,
	},
	{
		task: "Exercise",
		completed: true,
	},
	{
		task: "Walk the Dog",
		completed: true,
	},
	{
		task: "Pay Bills",
		completed: true,
	},
	{
		task: "Get Gas",
		completed: false,
	},
];

// const removeTodo = (arr, text) => {
// 	const index = arr.findIndex(function (todo, index) {
// 		return todo.task.toLowerCase() === text.toLowerCase();
// 	});
// 	if (index > -1) todos.splice(index, 1);
// };

// removeTodo(todos, "Pay Bills");
// removeTodo(todos, "walk the dog");
// console.log(todos);

const getThingsToDo = todos => {
	return todos.filter(todo => {
		return !todo.completed;
	});
};

//console.log('Not Completed',getThingsToDo(todos));

const sortTodos = todos => {
	todos.sort((a, b) => {
		if (!a.completed && b.completed) return -1;
		else if (!b.completed && a.completed) return 1;
		else return 0;
	});
};

sortTodos(todos);
console.log(todos);
