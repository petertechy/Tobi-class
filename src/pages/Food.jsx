import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Food = () => {
  return (
    <div className='mx-auto col-7 p-3 text-center border border-3 border-primary'>
        <h1>Food</h1>
        <span>
            <Link to="fish">Fish</Link>|| <Link to="meat">Meat</Link>
        </span>

        <Outlet/>
    </div>
  )
}

export default Food
