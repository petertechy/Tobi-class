import React, { useRef } from 'react'

useRef

const Ref = () => {
    const reference = useRef();

    // console.log(reference)

  const changeName = () =>{
    console.log(reference.current.innerText)
    reference.current.innerText = "Hello Tobi"
    reference.current.style.color = "blue"
  }

  return (
    <div>
        <h1 ref={reference}>Hello World</h1>
        <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default Ref