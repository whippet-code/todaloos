// helper functions
// fetch todos
// set todos

// fetch todos

async function getTodos() {
  const response = await fetch("./todos.js");
  const data = await response.json();
  return data;
}

function setTodos(todos) {
  // save current todos array as json file
  const saveTodos = JSON.stringify(todos);
  // save/write command
}
