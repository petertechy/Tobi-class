import React, { useState } from 'react'

const Count = () => {

    const [number, setnumber] = useState(1)
    const [myName, setmyName] = useState("Tobi")

    // let number = 10

    // const handleNumber = () =>{
    //     setnumber(number+1)
    //     console.log(number)
    // }
  return (
    <div className='mx-auto col-7 p-3 my-4 shadow border rounded-3 text-center'>
        <h1>Number: {number}</h1>
        <h1>Name: {myName}</h1>
        <button onClick={()=>setnumber(number+1)} className='btn btn-success btn-lg'>Increase Number</button>
        <button className='btn btn-success btn-lg ms-2' onClick={()=>setmyName("Daniel")}>Change Name</button>
    </div>
  )
}

export default Count