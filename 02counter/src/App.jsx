import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   const [counter, setCounter] = useState(0)

  // let counter = 15

  const addValue = () => {
    if (counter < 20){              // practice for the not exceeding the vlaue of 20.
      setCounter(counter + 1);
    }
    // counter = counter + 1
    // setCounter(counter + 1)
  };

  const removeValue = () => {
    if (counter > 0){
      setCounter(counter - 1);        // not going less than 0.
    }
    // setCounter(counter - 1)
  }

  return (
    <>
      <h1>Fun Clicker</h1>
      <h2>Add or Remove the Value</h2>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick = {addValue}
      >Add Value {counter} </button>
      <br/>
      <button
      onClick = {removeValue}
      >Remove Value {counter} </button>
      
      <p>footer: {counter}</p>

    </>
  )
}

export default App
