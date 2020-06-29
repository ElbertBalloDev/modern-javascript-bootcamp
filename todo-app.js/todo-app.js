// const ps = document.querySelectorAll('p');
// const newList = ps.forEach((p) => {
//   if(p.textContent.includes('the')) p.remove();
// })

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
		completed: false,
	},
	{
		task: "Get Gas",
		completed: false,
	},
];

const filters = {
  search: "",
  hideCompleted: false,
};

const renderTodos = (todos, filters) => {
	const filterTodos = todos.filter(todo => todo.task.toLowerCase().includes(filters.search.toLowerCase()));
	const incompleteTodos = filterTodos.filter(todo => !todo.completed);

	const summary = document.createElement("h2");
	const todoList = document.querySelector("#todo-list");

	todoList.innerHTML = "";

	summary.textContent = `You have ${incompleteTodos.length}.`;
	todoList.append(summary);

	incompleteTodos.forEach(todo => {
		const todoItem = document.createElement("p");
		todoItem.textContent = todo.task;
		todoList.append(todoItem);
	});
};

renderTodos(todos, filters);

document.querySelector("#filter-todo").addEventListener("input", e => {
	filters.search = e.target.value;
	renderTodos(todos, filters);
});

document.querySelector("#todo-form").addEventListener("submit", e => {
	e.preventDefault();
	todos.push({
		task: e.target.elements.todo.value,
		completed: false,
	});
	renderTodos(todos, filters);
	e.target.elements.todo.value = "";
});

document.querySelector("#completed-checkbox").addEventListener("change", (e) => {
filters.hideCompleted = e.target.checked;
})