import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>custom app</h1>
        </div>
    )
}

const reactElement = {
    type: 'a',
    props: {
        href: "https/google.com",
        target: '_blank'
    },
    Children: 'click me to visit google'
}
const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit Goolge</a>
)

createRoot(document.getElementById('root')).render(
  
    <anotherElement />
  
)
