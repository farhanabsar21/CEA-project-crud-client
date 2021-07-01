import React from 'react';
import Posts from './Posts';
import Header from './Header';
const Home = () => {
    return (
        <section className="home-container">
            <Header/>
            <Posts/>
        </section>
    );
};

export default Home;