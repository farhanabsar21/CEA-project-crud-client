import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { GetUnLikes } from '../App';
import Header from './Header';

const UnLikedPost = () => {
    const [unLikes, setUnLikes] = useState([])
    const [unLikeCount, setUnLikeCount] = useContext(GetUnLikes);
    useEffect(()=>{
        fetch("https://cea-project-server.herokuapp.com/unLikedPost")
            .then(res => res.json())
            .then(data => {
                setUnLikes(data)
                setUnLikeCount(data)
            })
    }, [setUnLikeCount])
    return (
        <div className="like-collection">
            <Header />
            {unLikes.map((unLikePs, index) =>
                <div className="like-info" key={index}>
                    <h2>{unLikePs.title}</h2>
                    <p>{unLikePs.body}</p>
                </div>
            )}
        </div>
    );
};

export default UnLikedPost;