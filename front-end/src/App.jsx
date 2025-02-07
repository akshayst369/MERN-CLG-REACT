import React from 'react'
import Name from './components/Name'

const App = () => {

  const userData={
    fname: "Akshay",
    lname: "R",
    ph_no: "1234567890"
  }
  return (
    <div>
      {/* /using spread operator */}
      <Name {...userData} />

      
  )
}

export default App