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

    {/* without spread operator */}
      <Name fname ={userData.fname} 
      lname = {userData.lname}
       ph_no = {userData.ph_no} />

    </div>
  )
}

export default App