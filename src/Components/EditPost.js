import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'
import Header from './Header';
import { useRef } from 'react';

const EditPost = () => {
    let { postId } = useParams(); 
    let url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    const [edit, setEdit] = useState({})

    useEffect(()=> {
        fetch(url)
            .then(res => res.json())
            .then(data => setEdit(data))
    }, [url])

    const displayUpdateForm = useRef(null)

    const handleUpdate = () => {
        displayUpdateForm.current.style.display = "block"
    }
    const closeUpdate = () => {
        displayUpdateForm.current.style.display = "none"
    }
    const updateForm = () => {
        const title = document.getElementById("edit-title").value;
        const body = document.getElementById("edit-body").value;
        const postId = edit.id;
        const updateData = {title, body, postId}

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "PATCH",
            headers: {'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(updateData)
        })
        .then(res => res.json())
        .then(data => data)
    }
    return (
        <section className="post-details-edit">
            <Header/>
            <div className="edit-post-container">
                <h1>{edit.title}</h1>
                <p>{edit.body}</p>
            </div>
            <div>
                <p className="update-btn" onClick={()=> handleUpdate()}>Edit post <FontAwesomeIcon icon={faEdit} /></p>
            </div>
            <div className="update-area" ref={displayUpdateForm}>
                <div className="close-form" onClick={()=> closeUpdate()}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <h2>update area</h2>
                <div>
                    <input type="text" defaultValue={edit.title} id="edit-title"/>
                    <textarea type="text" defaultValue={edit.body} id="edit-body"/>
                    <button onClick={()=> updateForm()}>update</button>
                </div>
            </div>
        </section>
    );
};

export default EditPost;