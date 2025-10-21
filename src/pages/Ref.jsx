import React, { useRef } from 'react'

useRef

const Ref = () => {
    const reference = useRef(null);

    console.log(reference.current);
    reference.current = "Adeola"

  return (
    <div>
        <h1>{reference.current}</h1>
    </div>
  )
}

export default Ref