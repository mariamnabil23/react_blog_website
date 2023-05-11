import React from 'react'
import './post.css'
import Post1 from '../media/post1.avif'

const Post = () => {
    return (
        <div className='post'>
            <img src={Post1} alt='postImg' className='post-img'/>
            <div className='post-info'>
                <div className="post-category">
                    <span className='post-cate'>life</span>
                    <span className='post-cate'>music</span>
                </div>
                <span className='post-title'>hi .. open post 1 !</span>
                <hr />
                <span className='post-date'>1 hour ago</span>
            </div>
            <p className='post-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident recusandae non deserunt atque, iste facere, vitae voluptatibus aliquid eaque, ducimus ipsum. 
                Expedita voluptate sed doloremque commodi quod? Assumenda, voluptatum doloribus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident recusandae non deserunt atque, iste facere, vitae voluptatibus aliquid eaque, ducimus ipsum. 
                Expedita voluptate sed doloremque commodi quod? Assumenda, voluptatum doloribus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident recusandae non deserunt atque, iste facere, vitae voluptatibus aliquid eaque, ducimus ipsum. 
                Expedita voluptate sed doloremque commodi quod? Assumenda, voluptatum doloribus?
            </p>
        </div>
    )
}

export default Post