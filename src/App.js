import React from 'react'

import User from './components/User'
import './App.css'
function App() {
  return (
    <div >
      <h1>Hello React</h1>
      <User name="Murad" 
            surname="Maili" 
            age={23}
            friends={['Kamran','Elnur','Fuad']} //props seklinde diger componentlerde 
                                           //istifade oluna biler
      />
    </div>
  )
}

export default App