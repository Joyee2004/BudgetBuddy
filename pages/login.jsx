import axios from 'axios'
import "./login.css";
import { useState } from 'react';
export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        axios.post('http://localhost:8081/login',
        {username,password})
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    }

    return (
        
        <div className="auth-form-container">
            <h2 className="header">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="loglabel" htmlFor="email">username</label>
                <input className="log"value={username} onChange={(e) => setUsername(e.target.value)}type="text" placeholder="your username" id="username" name="username" required />
                <label className="loglabel" htmlFor="password">password</label>
                <input  className="log"value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" required />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
           
        </div>
    )
};