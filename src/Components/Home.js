import React from "react";
import { useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css'


function Home() {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/Login')
    }
    const navigateToSignup = () => {
        navigate('/Signup')
    }
    return (
        <div style={{textAlign: "center"}}>
            <div><h1 className="title">HI! WELCOME TO MY WEBSITE</h1></div>
            <div><h2 className="title">HAPPY SHOPPING</h2></div>
            <div>
                <button className="submit-button" onClick={navigateToLogin}>LOGIN</button><br></br>
                <p style={{color: "white"}}>If already signed up, please login</p><br></br>
            </div>
            <div>
                <button className="submit-button" onClick={navigateToSignup}>Sign up</button>
                <p style={{color: "white"}}>If first time visiting, please sign up</p>
            </div>
        </div>
    )
}
export default Home;