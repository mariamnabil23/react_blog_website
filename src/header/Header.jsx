import React from 'react'
import './header.css'
import HeaderImg from '../media/header.avif'

const Header = () => {
return (
    <div className='header'>
        <div className="header-titles">
            <span className='first-header-title'>React & Node</span>
            <span className='second-header-title'>Blog</span>
        </div>
        <img src={HeaderImg} alt='headerImg' className='header-img'/>
    </div>
)
}

export default Header