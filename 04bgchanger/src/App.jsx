import { useState } from "react"

function App() {
const [color, setColor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen duration-200"
       style={{backgroundColor: color}} 
      >
        <div className="fixed flex flex-wrap
        jsutify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap jsutify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=> setColor("red")}
          className="outline-done px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Red"}}
          >Red</button>
          <button 
           onClick={()=> setColor("green")}
          className="outline-done px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Green"}}
          >Green</button>
          <button 
           onClick={()=> setColor("blue")}
          className="outline-done px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Blue"}}
          >Blue</button>
          <button 
           onClick={()=> setColor("yellow")}
          className="outline-done px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Yellow"}}
          >Yellow</button>
          <button
           onClick={()=> setColor("black")}
          className="outline-done px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Black"}}
          >Black</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
