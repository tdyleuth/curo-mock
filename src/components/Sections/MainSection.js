import React from 'react';
import './MainSection.css';

function MainSection() {
    return (
        <div className='hero-section'>
            <div id='main-message'>
                <p>
                    <span className='orange-text'>Change</span>
                    <span> your life today with the help of </span>
                    <span className='orange-text'>Eagle Finance</span>
                </p>
            </div>

            <div id='btn-container'>
                <a id='main-btn' href='#'>
                    Get Started
                </a>
            </div>
            <p className='sign-up'>
                Already have an account?<a href='#'>Sign in here</a>
            </p>
        </div>
    );
}

export default MainSection;
