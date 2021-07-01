import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { GetLikes } from '../App';
import Header from './Header';
const LikedPost = () => {
    const [likes, setLikes] = useState([])
    const [likeCount, setLikeCount] = useContext(GetLikes);
    useEffect(()=>{
        fetch("https://cea-project-server.herokuapp.com/likedPost")
            .then(res => res.json())
            .then(data => {
                setLikes(data)
                setLikeCount(data)
            })
    }, [setLikeCount])
    
    return (
        <div className="like-collection">
            <Header/>
            {likes.map((likePs, index) =>
                <div className="like-info" key={index}>
                    <h2>{likePs.title}</h2>
                    <p>{likePs.body}</p>
                </div>
            )}
        </div>
    );
};

export default LikedPost;