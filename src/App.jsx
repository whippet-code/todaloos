import { useState, useEffect } from 'react'
import NewTodo from './components/NewTodo'
import Todo from './components/Todo'
import { getTodos } from './components/setAndGet'
import './App.css'


function App() {

  const [ todos, setTodos ] = useState([])

  useEffect(() => {
    const getStorageData = () => {
      const storageData = getTodos()
      setTodos(storageData)
    }
    
    getStorageData()
  }, [])

  return (
    <>

      <h1>ToDaLoos</h1>
      <div className="holder">
        <NewTodo todos={todos} updateTodos={setTodos} />
        {todos.map(todo => <Todo key={todo.id} task={todo.task} />)}
      </div>

    </>
  )
}

export default App
