import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { PostUpdate } from '../App';
import SinglePost from './SinglePost';

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [inputText, setInputText] = useState("");
    const [postCount, setPostCount] = useContext(PostUpdate);
    
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data.slice(0,20)))
    }, [])
    return (
        <section className="post-collection">  
            <div className="input-container">
                <div>
                    <input type="text" placeholder="search post.." onChange={event => (setInputText(event.target.value))}/>
                </div>
            </div>
            <div className="single-post-container">
                {posts.filter(allPost => allPost.title.toLowerCase().includes(inputText.toLowerCase()))
                    .map((post, index) => {
                        let postData = <SinglePost post={post} key={post.id} />
                        setPostCount(index)
                        return postData
                    })
                }
            </div>
        </section>
    );
};

export default Posts;