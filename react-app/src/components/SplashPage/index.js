import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/session";
import splash from '../../assets/splash.jpeg';
import './SplashPage.css'


const SplashPage = () => {
    let sessionLinks;

    const dispatch = useDispatch();

    const demoLogin = () => {
        const email = 'chosenOne@hogwarts.edu';
        const password = 'password';
        return dispatch(login(email, password));
    }

    sessionLinks = (
        <div>
            <div className="bgImageContainer">
                <img className="bgImage" src={splash} alt="potion bottle with wand"></img>

            </div>
        </div>
    )

    return (
        <div className="splashPage">
            {sessionLinks}
        </div>
    )

}

export default SplashPage
