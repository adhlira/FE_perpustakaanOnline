/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Footer/>
    </>
  )
}

export default App
