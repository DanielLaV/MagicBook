import React, { useState } from "react";
import splash from '../../assets/splash.jpeg';
import './SplashPage.css'
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';


const SplashPage = () => {

    const [form, setForm] = useState('Login');
    let showLogin = form === 'Login';


    const clickLogin = () => {
        setForm('Login')
    }

    const clickSignup = () => {
        setForm('Signup')
    }

    return (
        <div className="splashPage">
            <div className="bgImageContainer">
                <img className="bgImage" src={splash} alt="potion bottle with wand"></img>
            </div>
            <div className="rightHalf">
                <div className="userAuthContainer">
                    <div className="userAuthHeader">
                        <button className="authButton" onClick={clickLogin}>Log In</button>
                        <button className="authButton" onClick={clickSignup}>Sign Up</button>
                    </div>
                    <div className="userAuth">
                        <div className="currForm">
                            {showLogin && <LoginForm />}
                            {!showLogin && <SignupForm />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SplashPage
