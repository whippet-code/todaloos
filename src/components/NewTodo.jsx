// New Todo form component
// no props, used to create a new todo and add to file / state
import PropTypes from 'prop-types'
import { getTodos, setTodos } from './setAndGet'
//props todos & setTodos
function NewTodo({ updateTodos }) {

  function submit(e) {
    e.preventDefault()
    // generate id from date
    const newId = new Date().valueOf()

    const newTodo = {
      id: newId,
      task: e.target[0].value,
    }
    let newTodos = getTodos()
    newTodos.push(newTodo)
    setTodos(newTodos)
    updateTodos(newTodos)
  }

  return (
    <form onSubmit={submit}>
      <input type='text' id="newTask" placeholder="New task..."></input>
      <button type="submit">Add</button>
    </form>
  )
}

NewTodo.propTypes = {
  updateTodos: PropTypes.func
}

export default NewTodo