// Todo component
// props todo id & task
// has a completed button which will remove the todo from file and screen

import { setTodos } from './setAndGet'

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
    <div className="todo">
      <h3>{todo.task}</h3>
      <button type="button" onClick={deleteTodo}>Done</button>
    </div>
  )
}

export default Todo