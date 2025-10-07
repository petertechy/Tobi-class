import React from 'react'

const Button = ({title, color, test}) => {
    console.log(title,color,test)
  return (
    <div className='row col-4 mx-auto'>
        <button onClick={test} className={color}>{title}</button>
    </div>
  )
}

export default Button