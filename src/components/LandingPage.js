import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const LandingPage = () => {

    let createOrLog = useRef(null);
    let createAccount = useRef(null);
    let logIn = useRef(null);

    useEffect(() => {
     
    return (
        <div>
            <Header/>
            <section className='landing-page'>
                <div>
                    <h2 className='invisible' ref={element => {createOrLog = element}}>Create An Account or Log In</h2>
                    <Link to='/CreateAccount' className='invisible' ref={element => {createAccount = element}}><button className='create-account-button'>Create An Account</button></Link>
                    <Link to='/LogIn' className='invisible' ref={element => {logIn = element}}><button className='log-in-button'>Log In</button></Link>
                </div>
            </section>
        </div>
    )
};

export default LandingPage;