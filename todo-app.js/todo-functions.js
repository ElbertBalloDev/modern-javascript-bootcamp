const getTodos = () => {
	const todosJSON = localStorage.getItem("todos");
	return todosJSON !== null ? JSON.parse(todosJSON) : [];
};

const saveTodos = () => localStorage.setItem("todos", JSON.stringify(todos));

const removeTodo = id => {
  const index = todos.findIndex((todo) => todo.id === id); 
  index > -1 && todos.splice(index, 1);
  saveTodos(todos);
  renderTodos(todos, filters);
}

const toggleTodo = id => {
  const todo = todos.find((todo) => todo.id === id); 
  todo !== undefined && (todo.completed = !todo.completed);
  saveTodos(todos);
  renderTodos(todos, filters);
}

//Get the DOM element for an individual note
const generateTodo = todo => {
  const todoItem = document.createElement("div");
  const checkbox = document.createElement("input");
  const text = document.createElement("span");
  const removeButton = document.createElement("button");

  //Setup todo checkbox
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("change", () => toggleTodo(todo.id));
  checkbox.checked = todo.completed;
  todoItem.appendChild(checkbox);

  //Setup the todo text
  text.textContent = todo.task.length > 0 ? todo.task : "Unnamed Task";
  todoItem.appendChild(text);

  //Setup the remove button
  removeButton.textContent = "x"
  todoItem.appendChild(removeButton);
  removeButton.addEventListener("click", () => removeTodo(todo.id));
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
