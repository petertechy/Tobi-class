import React, { useEffect, useState } from 'react'

const EffectClass = () => {
    const [count, setcount] = useState(0)
    const [myname, setmyname] = useState("Tobi")
    useEffect(()=>{
        console.log("Component Mounted")

        return () => {
        console.log("Component Unmounted")
      }
    }, [count])
    
    
  return (
    <div>
        <h1>You clicked {count} time</h1>
        <p>{myname}</p>
        <button onClick={()=>setmyname("Olanrewaju")}>Change NAME</button>
        <button onClick={()=>setcount(count+1)}>Click Here</button>
    </div>
  )
}

export default EffectClass
