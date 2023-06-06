import { useState, useEffect } from 'react'

import './App.css'


function App() {

  const [ todos, setTodos ] = useState([])

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch('./todos.json')
      const data = await response.json()
      setTodos(data)
    }
    
    getTodos()
  }, [])

  return (
    <>

      <h1>ToDaLoos</h1>
      <div className="holder">
        {todos.map(todo => {
          return (
            <>
              <h2>{todo.task}</h2>
            </>
          )
        })}
      </div>

    </>
  )
}

export default App
