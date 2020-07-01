const todos = getTodos();
const filters = {
	search: "",
	hideCompleted: false,
};

renderTodos(todos, filters);

document.querySelector("#filter-todo").addEventListener("input", e => {
	filters.search = e.target.value;
	renderTodos(todos, filters);
});

document.querySelector("#todo-form").addEventListener("submit", e => {
	e.preventDefault();
	todos.push({
		id: uuidv4(),
		task: e.target.elements.todo.value,
		completed: false,
	});
	saveTodos(todos);
	renderTodos(todos, filters);
	e.target.elements.todo.value = "";
});

document.querySelector("#completed-checkbox").addEventListener("change", e => {
	filters.hideCompleted = e.target.checked;
	renderTodos(todos, filters);
});
