import React from 'react'
import LogoImg from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
const Logo = () => {
    return (
        <Link to="/">
            <img src={LogoImg} alt="" className='cursor-pointer'/>
        </Link>
    )
}

export default Logo