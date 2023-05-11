import React from 'react';
import './register.css'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='register'>
            <h1 className='registerTitle'>register</h1>
            <form className='registerForm'>
                <label>Username</label>
                <input type='text' placeholder='enter your username ..'></input>
                <label>E-mail</label>
                <input type='email' placeholder='enter your e-mail ..'></input>
                <label>Password</label>
                <input type='password' placeholder='enter your password ..'></input>
                <button className='registerBtn'>register</button>
            </form>
            <button className='login-btn'><Link to='/login'>Login</Link></button>
        </div>
    );
}

export default Register;
