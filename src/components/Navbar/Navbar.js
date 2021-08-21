import React from 'react';
import '../Navbar.css';
import logo from '../../images/Eagle_Finance_logo.png';

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <div className='top-nav'>
                <a href='#'>
                    {' '}
                    <i className='fa fa-phone'></i>1-888-100-1111
                </a>
                <a href='#'>
                    {' '}
                    <i className='fa fa-lock'></i>Sign In
                </a>
            </div>
            <div className='nav-menu'>
                <a href='#'>
                    <img id='logo' src={logo} alt='Logo' />
                </a>
                <a id='icon' href='#'>
                    <i className='fa fa-bars fa-2x'></i>
                </a>
            </div>
        </div>
    );
}
