import { useState, useEffect } from 'react'
import firebase from './firebase'

import './App.css'

import dotenv from 'dotenv'
// allows access to environment variables - see .env file
dotenv.config()

// setup and link to firebase db
const firebaseConfig = {

}

function App() {

  const [ todos, setTodos ] = useState([])

  useEffect(() => {
    const fetchData = async () => {

    }
  }, [])

  return (
    <>

      <h1>ToDaLoos</h1>
      <div className="holder">
      </div>

    </>
  )
}

export default App
