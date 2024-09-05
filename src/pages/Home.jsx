import React from 'react';

const Home = () => {
    return (
        <div className='home-container'>
            <img src={'/Pursuit picture.jpg'} alt="Oscar Quintanilla" className='profile-image' />
            <div>
                <h1>Welcome to My Portfolio</h1>
                <p className='intro-text'>
                    Hi, I'm Oscar Quintanilla, a passionate full-stack developer looking to break into the tech world.
                    My journey started with a fascination for tech and cryptocurrency, propelling me towards a career in web development. 
                    As a devoted husband and father of two beautiful girls, I recognize the the significance of financial stability and professional achievement.
                    Currently, I juggle my role as a delivery driver while actively refining my technical skills and public speaking abilities.
                </p>
            </div>
        </div>
    );
};

export default Home;