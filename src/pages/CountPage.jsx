import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increaseByNumber, increment,  } from '../redux/counterSlice'

const CountPage = () => {
    const count = useSelector(state=>state.counterSlice.count)
    // console.log(count)

    let dispatch = useDispatch()
  return (
    <div>
        <h1>Count Page</h1>
        <h1>The Count is {count}</h1>
        <button onClick={()=>dispatch(increment())}>Increase Number</button>
        <button onClick={()=>dispatch(decrement())}>Decrease Number</button>
        <button onClick={()=>dispatch(increaseByNumber(10))}>Increase By Number</button>
    </div>
  )
}

export default CountPage
