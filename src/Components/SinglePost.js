import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useEffect } from 'react';

const SinglePost = props => {
    const { title, body, id } = props.post;
    const [postInfo, setPostInfo] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPostInfo(data))
    },[])

    const handleLikeBtn = events => {
        const prevPostInfo = props.post;
        const newPostInfo = postInfo.filter(likedPost => likedPost.id === prevPostInfo.id);
        fetch("https://cea-project-server.herokuapp.com/likedPost", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPostInfo)
        })
            .then(res => res.json())
            .then(result => result)
        let color = events.target.style.color = "#3366cc"
        let id = props.post.id
        localStorage.setItem(id, color)
    }

    const handleUnLikeBtn = events => {
        const prevPostInfo = props.post;
        const newPostInfo = postInfo.filter(likedPost => likedPost.id === prevPostInfo.id);
        fetch("https://cea-project-server.herokuapp.com/unLikedPost", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPostInfo)
        })
            .then(res => res.json())
            .then(result => result)
        let color = events.target.style.color = "#e62e00"
        let id = props.post.id
        localStorage.setItem(id, color)
        events.target.style.color = "#e62e00"
    }
    return (
        <div className="post-info">
            <h2>{title}</h2>
            <p>{body}</p>
            <div className="thumb-position">
                <div className="thumb-container">
                    <div>
                        <Link to={`/posts/${id}`}><button>Read more</button></Link>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faThumbsUp} onClick={handleLikeBtn}/>
                        <FontAwesomeIcon icon={faThumbsDown} onClick={handleUnLikeBtn}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;