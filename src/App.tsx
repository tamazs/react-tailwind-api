import { useState } from 'react'
import toast from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <button className="btn btn-primary" onClick={() => {
            toast.success('Hello World!')
        }}>My button</button>
    </>
  )
}

export default App
