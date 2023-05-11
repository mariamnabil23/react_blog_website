import React from 'react'
import './topbar.css'
import Profile from '../media/profile.jpg'
import { Link } from 'react-router-dom'

const Topbar = () => {
    const user = true;
    return (
        <div className='top'>
            <div className="top-left">
                <i class="top-icon fa-brands fa-twitter"></i>
                <i class="top-icon fa-brands fa-facebook"></i>
                <i class="top-icon fa-brands fa-pinterest"></i>
                <i class="top-icon fa-brands fa-square-instagram"></i>
            </div>
            <div className="top-center">
                <ul className='top-list'>
                    <li className='top-list-item'><Link to='/'>home</Link></li>
                    <li className='top-list-item'><Link to='/'>about</Link></li>
                    <li className='top-list-item'><Link to='/'>contact</Link></li>
                    <li className='top-list-item'><Link to='/write'>write</Link></li>
                    <li className='top-list-item'>{user && 'logout'}</li>
                </ul>
            </div>
            <div className="top-right">
                {user ? 
                (<img src={Profile} alt='profile' className='top-img' />
                ):(
                <ul className='top-list'>
                    <li className='top-list-item'><Link to='/login'>login</Link></li>
                    <li className='top-list-item'><Link to='/register'>register</Link></li>
                </ul>)
                }
                <i class="top-search-icon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default Topbar