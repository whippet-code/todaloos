// New Todo form component
// no props, used to create a new todo and add to file / state

import { getTodos, setTodos } from './setAndGet'

function NewTodo() {

  function submit(e) {
    e.preventDefault()
    // generate id from date
    const newId = new Date().valueOf()

    const newTodo = {
      id: newId,
      task: e.target[0].value,
    }
    let todos = getTodos()
    todos.push(newTodo)
    setTodos(todos)
  }

  return (
    <form onSubmit={submit}>
      <input type='text' id="newTask" placeholder="New task..."></input>
      <button type="submit">Add</button>
    </form>
  )
}

export default NewTodo