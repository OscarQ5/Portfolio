import React from 'react';

const Home = () => {
    return (
        <div className='home-container'>
            <img src={'/Pursuit picture.jpg'} alt="Oscar Quintanilla" className='profile-image' />
            <div>
                <h1>Welcome to My Portfolio</h1>
                <p>Hi, I'm Oscar Quintanilla, a passionate full-stack developer looking to break into the tech world.</p>
            </div>
        </div>
    );
};

export default Home;