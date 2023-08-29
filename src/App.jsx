import { useState } from 'react'
import Header from './Header'

import Employees from './Employees'
import Footer from './Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Employees />
      <Footer />
    </>
  )
}

export default App
