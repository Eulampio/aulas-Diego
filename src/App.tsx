
import { useState } from 'react';
import './App.css'

function App() {
// const constante = 'avril lavigne'
// let variavel ="simlpe pla"

  const [email, setEmail] = useState("");
  console.log("valor " , email)
  return (
    <main>
      <label htmlFor="">email</label>
      <input type="text" id='campoEmail' value={email}onChange={(evt) => setEmail(evt.target.value)}/>
    </main>
    
  )
}

export default App
