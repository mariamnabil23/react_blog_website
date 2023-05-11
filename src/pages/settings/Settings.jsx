import React from 'react';
import './settings.css'
import Sidebar from '../../sidebar/Sidebar'
import Img from '../../media/profile.jpg'

const Settings = () => {
    return (
        <div className='settings'>
            <div className="set-contanier">
                <div className='set-title'>
                    <span className='update'>update your account</span>
                    <span className='delete'> delete your account</span>
                </div>
                <form className='set-form'>
                    <label>profile picture</label>
                    <div className='set-pic'>
                        <img src={Img} alt=''/>
                        <label for="myfile"><i className="picIcon fa-regular fa-circle-user"></i></label>
                        <input type="file" id="myfile" name="myfile" style={{display: 'none'}}></input>
                    </div>
                    <label>username</label>
                    <input type='text' placeholder='Mariam' />
                    <label>e-mail</label>
                    <input type='email' placeholder='Mariam@gmail.com' />
                    <label>password</label>
                    <input type='password'/>
                    <button className='update-btn'>update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}

export default Settings;
