import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componet/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "himanshu",
    age: 21
  }

  let newArr = [1,2,3,4]
  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-lg'>Tailwind test</h1>
      <Card username="heybuddy"  btnText="click me"/>
      <Card username = "hello" btnText="visit me"/>
      
    </>
  )
}

export default App
