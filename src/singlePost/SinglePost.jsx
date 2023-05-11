import React from 'react'
import './singlePost.css'
import Post1 from '../media/post1.avif'

const SinglePost = () => {
    return (
        <div className='singlePost'>
            <div className="singlePostContainer">
                <img src={Post1} alt='' className='singlePostImg' />
                <h1 className='singlePostTitle'>hi .. there is post 1 !
                    <div className='singlePostEditContainer'>
                        <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i class="singlePostIcon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author : <b>Mariam</b></span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Voluptates repudiandae ipsum eius sit amet omnis laudantium repellat ea quo iste quos, 
                    qui eveniet incidunt consequuntur accusantium, molestiae, labore iusto reprehenderit?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Voluptates repudiandae ipsum eius sit amet omnis laudantium repellat ea quo iste quos, 
                    qui eveniet incidunt consequuntur accusantium, molestiae, labore iusto reprehenderit?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Voluptates repudiandae ipsum eius sit amet omnis laudantium repellat ea quo iste quos, 
                    qui eveniet incidunt consequuntur accusantium, molestiae, labore iusto reprehenderit?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Voluptates repudiandae ipsum eius sit amet omnis laudantium repellat ea quo iste quos, 
                    qui eveniet incidunt consequuntur accusantium, molestiae, labore iusto reprehenderit?
                </p>
            </div>
        </div>
    )
}

export default SinglePost