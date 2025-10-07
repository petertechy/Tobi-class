import React from 'react'
import style from "./Footer.module.css"
import { Button, HeadingText } from './Footer.styles'

const Footer = () => {
  return (
    <>
        <div className={style.container}>
            {/* <h1 className={style.heading}>Footer</h1>
             */}
             <HeadingText>Footer</HeadingText>
            <Button>Contact Us</Button>
        </div>
    </>
  )
}

export default Footer