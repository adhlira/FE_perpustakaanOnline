/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
