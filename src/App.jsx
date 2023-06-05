import './App.css'

import dotenv from 'dotenv'
// allows access to environment variables - see .env file
dotenv.config()

const Todos = [
  {
    id: 1,
    title: 'Buy Milk',
    completed: false,
  },
  {
    id: 2,
    title: 'Buy Bread',
    completed: false,
  }
]

function App() {

  return (
    <>

      <h1>ToDaLoos</h1>
      <div className="holder">
        <Todos props={Todos} />
      </div>

    </>
  )
}

export default App
