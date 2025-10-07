import React, { useState } from 'react'
import { video } from '../utils/videoList'


const List = () => {
    const fruit = ["Apple", "Orange", "Banana", "Mango", "Cherry"]

  return (
    <>
    <div className='mx-auto col-7 my-4 p-3 shadow border border-3'>
        <h1>List of Fruits</h1>

        <ul>
            {fruit.map((fruits, index)=>(
            <li key={index}>{fruits}</li>
        ))}
        </ul>
    </div>
    

    <div className='container mt-4'>
        <div className='row'>
        {
            video.map((videos, index)=>(
                <div key={index} className='col-md-4 mb-4'>
                        <img src={videos.img} alt={videos.title} width={400}/>
                        <div>
                            <h4>{videos.title}</h4>
                            <p>{videos.channel}</p>
                            <p>{videos.views} . {videos.time}</p>
                        </div>
                </div>
            ))
        }
        </div>
    </div>
    </>



  )
}

export default List