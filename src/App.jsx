import { useState, useEffect } from 'react'
import NewTodo from './components/NewTodo'
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
        <NewTodo />
        {todos.map(todo => {
          return (
            <div key={todo.id}>
              <h2>{todo.task}</h2>
            </div>
          )
        })}
      </div>

    </>
  )
}

export default App
