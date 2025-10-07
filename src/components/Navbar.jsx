import React from 'react'
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Navbar</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/effect">Effect</Link>
    </div>
  )
}

export default Navbar