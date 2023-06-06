// Helper functions for getting and setting todos in local storage

// get todos
function getTodos() {
  const todos = JSON.parse(localStorage.getItem("todos"));
  if (todos) {
    return todos;
  } else {
    return [
      {
        id: 1,
        task: "Sample todo",
      },
    ];
  }
}

// set todos
function setTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));

  // verify saved
  if (todos === getTodos()) {
    return 1;
  } else {
    return 0;
  }
}

export { getTodos, setTodos };
