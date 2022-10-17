import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import './SignIn.css'

function Signin() {
    const [username, setUsername] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const newUser = (e) => {
        e.preventDefault();
        if (username === "" || password1 === "") {
            setMessage("Please enter the values");
            //<input value={username} type="text" id="username" placeholder="username" onChange={(event) => setUsername(event.target.value)} /><br></br>
            //<label htmlFor="username">enter username:</label>
            //<label htmlFor="username" class="placeholder">username</label>
            //<label htmlFor="password">enter password:</label>
        }
        else if (password2 !== password1)
            setMessage("Please enter correct values for password");

        else {
            setMessage("");
            axios.post('http://localhost:4000/user', { username: username, password: password1 }).then((res) => {
                alert("New Employee has been added with the id " + res.data.id)
                navigate('/Login')
            });

            setUsername("")
            setPassword1("")
        }

    }
    return (
        <>
            <h1 className="title">SIGN IN FORM</h1>
            <form>
                <div className="form">
                    <div className="title">Welcome</div>
                    <div className="subtitle">Let's create your account!</div>
                    <div className="input-container ic1">
                    <input id="username" className="input" type="text" value={username} placeholder="Username" onChange={(event) => setUsername(event.target.value)} /><br></br>
                    <div className="cut"></div>
                    </div>

                    <div className="input-container ic2">
                    <input id="password" className='input' type="password" value={password1}   placeholder="password" onChange={(event) => setPassword1(event.target.value)} /><br></br>
                    <div className="cut"></div>
                    </div>

                    <div className="input-container ic2">
                    <input value={password2} className='input' type="password" id="password" placeholder="enter password again" onChange={(event) => setPassword2(event.target.value)} /><br></br>
                    <div className="cut"></div>
                    </div>
                    
                    <button type="text" className="submit" onClick={newUser}>SIGN IN</button>
                    <div className="text-danger">{message}</div>
                </div>
            </form>
        </>
    )
}
export default Signin;