import React from "react";
import './Header.css';
import { useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

function Header(){
    const navigate = useNavigate();

    const checkOut = (e) => {
        e.preventDefault();
        navigate('/Cart');
    }

    return(
        <div className="header">
            <h1>Buy your things here....</h1>
            <button className="btn btn-success" onClick={checkOut}>CHECK OUT</button>
            </div>
            
    
    )
}



export default Header;