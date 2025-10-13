import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterUser = () => {
    let navigate = useNavigate()
    let isRegistered = true

    const register = () =>{
        if(isRegistered){
            alert("Welcome on borad")
            navigate("/")
        }else{
            alert("You are not registered")
        }
    }
  return (
    <div>
        <h1>Register Page</h1>
        <button onClick={register}>Click here to register</button>
    </div>
  )
}

export default RegisterUser
