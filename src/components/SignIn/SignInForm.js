import React from 'react';
import './SignInForm.css';

function SignInForm() {
    return (
        <div className='form-container'>
            <form className='sign-in-form'>
                <h1>Sign In</h1>
                <label className='label'>Email Address</label>
                <input type='email' required />
                <label className='label'>Password</label>
                <input type='password' required />
                <button id='sign-in-btn'>Sign In</button>
                <a href='/forgot-email'>Forgot your email or password?</a>
            </form>
            <p id='sign-up-here'>
                New to Eagle Finance?{' '}
                <a id='apply-now' href='/apply-now'>
                    Apply Now!
                </a>
            </p>
        </div>
    );
}

export default SignInForm;
