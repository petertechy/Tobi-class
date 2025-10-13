import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
    let username = useParams()

    console.log(username)
  return (
    <div>UserProfile is {username.id}</div>
  )
}

export default UserProfile
