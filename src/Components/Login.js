import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css'

function Login() {
    const [data, setData] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let status = true;
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:4000/user").then((resp) => {
            setData(resp.data);
            console.log(resp.data)
        })
    }, []);


    const NavigateToBuy = ((e) => {
        e.preventDefault()
        const user1 = {
            username: username,
            password: password
        }

        for (var i = 0; i < data.length; i++) {
            if (data[i].username === user1.username && data[i].password === user1.password) {
                status = false
                navigate('/Buy')
                break;
            }
        }
        if (status)
            alert('please enter correct credentials')
    })

    return (
        <div>
            <h1 className="title">LOGIN FORM</h1>
            <form>
                <div className="form">
                    <div className="title">Welcome</div>
                    <div className="subtitle">Please enter your credentials</div>
                    <div className="input-container ic1">
                        <input value={username} type="text" className="input" id="username" placeholder="username" onChange={(event) => setUsername(event.target.value)} /><br></br>
                        <div className="cut"></div>
                    </div>
                    <div className="input-container ic2">
                        <input value={password} type="password" className="input" id="password" placeholder="password" onChange={(event) => setPassword(event.target.value)} /><br></br>
                        <div className="cut"></div>
                    </div>
                    <button type="text" className="submit" onClick={NavigateToBuy}>Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login;