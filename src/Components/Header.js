import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GetLikes, GetUnLikes, PostUpdate } from '../App';

const Header = () => {
    const [postCount, setPostCount] = useContext(PostUpdate);
    const [likeCount, setLikeCount] = useContext(GetLikes);
    const [unLikeCount, setUnLikeCount] = useContext(GetUnLikes);
    return (
        <section className="header-container">
            <div className="header-container-info">
                <p>Total posts: <strong>{postCount === null ? 0 : postCount + 1}</strong></p>
                <p>Total Likes: <strong>{likeCount.length}</strong> <Link to="/likedPost">(click to see <strong>like</strong> posts)</Link></p>
                <p className="dislikes">Total Dislikes: <strong>{unLikeCount.length}</strong> <Link to="/unLikedPost">(click to see <strong>unlike</strong> posts)</Link></p>
                <p><Link to="/">Go back to Home</Link></p>
            </div>
        </section>
    );
};

export default Header;