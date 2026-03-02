import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0)

  const addValue = () => {
        if (count < 20) {
        setCount(count+1)
        }
  }

    const decreaseValue = () => {
     if (count > 0)  {
        setCount(count - 1)
     }
      
  }
  return (
    <>
    <h1>Divyanshu's Counter</h1>
    <p>Count: {count}</p>
    <button onClick={addValue}>Increase</button>
    <br />
    <button onClick={decreaseValue}>Decrease</button>

    </>
  )
}

export default App
