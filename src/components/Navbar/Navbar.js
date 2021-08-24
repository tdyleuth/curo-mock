import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../images/Eagle_Finance_logo.png';

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const handleChange = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='navbar-container'>
            <div className='top-nav'>
                <a href='/phone-contact'>
                    {' '}
                    <i className='fa fa-phone'></i>1-888-100-1111
                </a>
                <a href='/sign-in'>
                    {' '}
                    <i className='fa fa-lock'></i>Sign In
                </a>
            </div>
            <div className='nav-menu-container'>
                <div id='nav-menu'>
                    <a href='/home'>
                        <img id='logo' src={logo} alt='Logo' />
                    </a>
                    <button onClick={handleChange} id='icon' href='#'>
                        <i className='fa fa-bars fa-2x'></i>
                    </button>
                </div>

                <div
                    className={
                        isActive ? 'navbar-menu-show' : 'navbar-menu-collapsed'
                    }
                >
                    <ul>
                        <li>
                            <a href='/faqs'>FAQS</a>
                        </li>
                        <li>
                            <a href='/rates-terms'>Rates & Terms</a>
                        </li>
                        <li>
                            <a href='/blog'>Blog</a>
                        </li>
                        <li>
                            <a id='apply-now-btn' href='/apply-now'>
                                Apply Now
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
