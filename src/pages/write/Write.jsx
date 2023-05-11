import React from 'react';
import './wite.css'
import Img from '../../media/header.avif'

const Write = () => {
    return (
        <div className='write'>
            <img src={Img} alt='' className='writeImg' />
            <form className='writeForm'>
                <div className="writeFormGroup">
                    <label for="myfile"><i class="writeIcon fa-solid fa-plus"></i></label>
                    <input type="file" id="myfile" name="myfile" style={{display:'none'}}></input>
                    <input type='text' placeholder='Title' autoFocus={true} className='writeInput'></input>
                </div>
                <div className='writeFormGroup'>
                    <textarea type='text' placeholder='open your heart .. tell us your story' className='writeInput textarea'></textarea>
                </div>
                <button className='submit'>Publish</button>
            </form>
        </div>
    );
}

export default Write;
