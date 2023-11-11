import React, { useState } from "react";
import { Checkbox } from "../Components/checkbox";
import "./login.css";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const[username,setUsername]=useState('');
 
    const[gusername,setGusername]=useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2 className="header">SIGN UP</h2>
            <p className="text"> Hey buddy,its time to track and manage your expenses!!</p>
        <form className="register-form" onSubmit={handleSubmit}>
            <label className="loglabel" htmlFor="name">Full name</label>
            <input className="log" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" required/>
            <label className="loglabel" htmlFor="email">email</label>
            <input  className="log" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" required />
            <label className="log" htmlFor="username">set user name</label>
            <input className="log" value={username} name="username" onChange={(e) => setUsername(e.target.value)} id="username" placeholder="user Name" required/>
            <label className="loglabel" htmlFor="password">password</label>
            <input  className="log" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required />
           
            <label htmlFor="gusername">Add guardian username(optional)</label>
            
            <input value={gusername} name="Guardian username" onChange={(e) => setGusername(e.target.value)} id="Guardian username" placeholder="guardian user Name" />
          
            < Checkbox label="I agree to terms & conditions"   />
            <button type="submit">Sign up</button>
           
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}