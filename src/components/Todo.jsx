// Todo component
// props todo id & task
// has a completed button which will remove the todo from file and screen

import { getTodos, setTodos } from './setAndGet'

function Todo(props) {

  const deleteTodo = () => {
    // get from storage, filter out this todo via id and save new todos array
    const todos = getTodos()
    const newTodos = todos.filter(todo => {
      if(todo.id !== props.todo.id) {
        return todo
      }
    })
    setTodos(newTodos)
  }
  return(
    <div className="todo">
      <h3>{props.todo.task}</h3>
      <button type="button" onClick={deleteTodo}>Done</button>
    </div>
  )
}

export default Todo