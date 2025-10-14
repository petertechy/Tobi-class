import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increaseByNumber, increment, saveStudent } from '../redux/counterSlice'

const CountPage = () => {
  const [mynum, setmynum] = useState(0)
  const [student, setstudent] = useState("")
  const [age, setage] = useState(0)

  // ✅ Fix here:
  const count = useSelector(state => state.counter.count)

  const dispatch = useDispatch()

  const savenum = (e) => {
    let number = Number(e.target.value)
    setmynum(number)
  }

  return (
    <div>
      <h1>Count Page</h1>
      <h1>The Count is {count}</h1>
      <input type="text" onChange={savenum} />
      <input type="text" placeholder='enter your name' onChange={(e) => setstudent(e.target.value)} />
      <input type="text" placeholder='enter your age' onChange={(e) => setage(e.target.value)} />
      <button onClick={() => dispatch(increment())}>Increase Number</button>
      <button onClick={() => dispatch(decrement())}>Decrease Number</button>
      <button onClick={() => dispatch(increaseByNumber(mynum))}>Increase By Number</button>
      <button onClick={() => dispatch(saveStudent({ student, age }))}>Save Students</button>
    </div>
  )
}

export default CountPage
