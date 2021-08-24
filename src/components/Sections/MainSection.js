import React from 'react';
import './MainSection.css';

function MainSection() {
    return (
        <>
            <div className='hero-section'>
                <div className='main-message'>
                    <p>
                        <span className='orange-text'>Change</span>
                        <span> your life today with the help of </span>
                        <span className='orange-text'>Eagle Finance</span>
                    </p>
                </div>

                <div id='btn-container'>
                    <a id='main-btn' href='/get-started'>
                        Get Started
                    </a>
                </div>
                <p className='sign-up'>
                    Already have an account?<a href='/sign-in'>Sign in here</a>
                </p>
            </div>
            <div className='second-section'>
                <div className='cards'>
                    <i className='fas fa-wallet fa-3x'></i>
                    <h2>Title 1</h2>
                    <p>
                        On sait depuis longtemps que travailler avec du texte
                        lisible et contenant du sens est source de distractions,
                        et empêche de se concentrer sur la mise en page
                        elle-même. L'avantage du Lorem Ipsum sur un texte
                        générique comme 'Du texte. Du texte.
                    </p>
                </div>
                <div className='cards'>
                    <i className='fas fa-money-bill fa-3x'></i>
                    <h2>Title 2</h2>
                    <p>
                        On sait depuis longtemps que travailler avec du texte
                        lisible et contenant du sens est source de distractions,
                        et empêche de se concentrer sur la mise en page
                        elle-même. L'avantage du Lorem Ipsum sur un texte
                        générique comme 'Du texte. Du texte.
                    </p>
                </div>
                <div className='cards'>
                    <i className='fas fa-business-time fa-3x'></i>
                    <h2>Title 3</h2>
                    <p>
                        On sait depuis longtemps que travailler avec du texte
                        lisible et contenant du sens est source de distractions,
                        et empêche de se concentrer sur la mise en page
                        elle-même. L'avantage du Lorem Ipsum sur un texte
                        générique comme 'Du texte. Du texte.
                    </p>
                </div>
            </div>

            <div className='third-section'>
                <div
                    className='personal-story-card'
                    id='personal-story-1'
                ></div>
                <div
                    className='personal-story-card'
                    id='personal-story-2'
                ></div>
                <div
                    className='personal-story-card'
                    id='personal-story-3'
                ></div>
            </div>
        </>
    );
}

export default MainSection;
