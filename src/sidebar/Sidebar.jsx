import React from 'react'
import './sidebar.css'
import AboutMe from '../media/sidebar.jpg'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-item">
                <span className='sidebar-title'>about me</span>
                <img src={AboutMe} alt='sidebar' className='sidebar-img' />
                <p className='sidebar-txt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. aliquam amet odit adipisci omnis distinctio!</p>
            </div>
            <div className="sidebar-item">
                <span className='sidebar-title'>categories</span>
                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'>life</li>
                    <li className='sidebar-list-item'>music</li>
                    <li className='sidebar-list-item'>sport</li>
                    <li className='sidebar-list-item'>style</li>
                    <li className='sidebar-list-item'>cinema</li>
                    <li className='sidebar-list-item'>tech</li>
                </ul>
            </div>
            <div className="sidebar-item">
                <span className='sidebar-title'>follow me</span>
                <div className='sidebar-social'>
                    <i class="sidebar-icon fa-brands fa-twitter"></i>
                    <i class="sidebar-icon fa-brands fa-facebook"></i>
                    <i class="sidebar-icon fa-brands fa-pinterest"></i>
                    <i class="sidebar-icon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar