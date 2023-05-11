import React from 'react';
import './login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <h1 className='loginTitle'>login</h1>
            <form className='loginForm'>
                <label>E-mail</label>
                <input type='email' placeholder='enter your e-mail ..'></input>
                <label>Password</label>
                <input type='password' placeholder='enter your password ..'></input>
                <button className='login-btn'>Login</button>
            </form>
            <button className='register-btn'><Link to='/register'>Register</Link></button>
        </div>
    );
}

export default Login;
