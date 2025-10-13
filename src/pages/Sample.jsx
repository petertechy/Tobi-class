// Component is a function that returns javascript and XML to be exported by default.
// React Fragmnent
// Interpolation

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Count from './Count'
import List from './List'
import RegisterUser from './components/RegisterUser'
import Button from './components/Button'

const App = () => {

  const myName = "Oluwatobi"
  const myAge = 20

  const myStyle = {
    color: "green",
    fontSize: "5rem",
    fontFamily: "cursive"
  }

  const test = () =>{
    alert("Hello there")
  }

  return (
    <>
    <Navbar/>


    <Button title ="Edit" color="btn btn-warning mb-3" test={test}/>
    <Button title ="Delete" color="btn btn-danger mb-3"  test={test}/>
    <Button title = "Update" color="btn btn-success"  test={test}/>


    <RegisterUser/>
    <Count/>
    <List/>
      <div>
        <h1 style={{color: "red", textDecoration: "underline"}}>Good Morning {myName}</h1>
      </div>
      <div>
        <h1 style={myStyle}>Good Afternoon - {myAge + 5}</h1>
        {/* <h2 class="display-2 fw-bold text-primary">Hello World</h2> */}
        <h1 className="text-3xl font-bold text-blue-900">Hello There</h1>
      </div>
      <Footer/>
    </>
  )
}

export default App
