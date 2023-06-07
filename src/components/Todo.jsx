// Todo component
// props todo id & task
// has a completed button which will remove the todo from file and screen

import { setTodos } from './setAndGet'
import PropTypes from 'prop-types'
function Todo({ todo, todos, updateTodos }) {

  const deleteTodo = () => {
    // get from storage, filter out this todo via id and save new todos array
    const newTodos = todos.filter(tdo => {
      if(tdo.id !== todo.id) {
        return tdo
      }
    })
    setTodos(newTodos)
    updateTodos(newTodos)
  }
  return(
    <div className="todo" onClick={deleteTodo}>
      <h3>{todo.task}</h3>
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.object,
  todos: PropTypes.array,
  updateTodos: PropTypes.func
}

export default Todo