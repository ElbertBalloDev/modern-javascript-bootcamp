const getTodos = () => {
	const todosJSON = localStorage.getItem("todos");
	return todosJSON !== null ? JSON.parse(todosJSON) : [];
};

const saveTodos = () => localStorage.setItem("todos", JSON.stringify(todos));

//Get the DOM element for an individual note
const generateTodo = todo => {
  const todoItem = document.createElement("div");
  const checkbox = document.createElement("input");
  const text = document.createElement("span");
  const button = document.createElement("button");

  //Setup todo checkbox
  checkbox.setAttribute("type", "checkbox");
  todoItem.appendChild(checkbox);

  //Setup the todo text
  text.textContent = todo.task.length > 0 ? todo.task : "Unnamed Task";
  todoItem.appendChild(text);

  //Setup the remove button
  button.textContent = "x"
  todoItem.appendChild(button);
  
	return todoItem;
};

const generateSummaryDOM = incompleteTodos => {
	const summary = document.createElement("h2");
	summary.textContent = `You have ${incompleteTodos.length} left.`;
	return summary;
};

const renderTodos = (todos, filters) => {
	let filterTodos = todos.filter(todo => todo.task.toLowerCase().includes(filters.search.toLowerCase()));

	const todoList = document.querySelector("#todo-list");
  todoList.innerHTML = "";

  const incompleteTodos = filterTodos.filter(todo => !todo.completed);
	filterTodos = !filters.hideCompleted ? filterTodos : incompleteTodos;
  todoList.appendChild(generateSummaryDOM(incompleteTodos));
  
	filterTodos.forEach(todo => todoList.appendChild(generateTodo(todo)));
};
