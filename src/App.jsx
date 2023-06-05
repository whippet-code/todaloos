import { useState, useEffect } from 'react'
import firebase from './firebase'

import './App.css'


// setup and link to firestore db
const firebaseConfig = {
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL
}

firebase.initializeApp(firebaseConfig)

function App() {

  const [ todos, setTodos ] = useState([])

  useEffect(() => {
    const db = firebase.firestore()
    const data = db.getDatabase('todos')
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
