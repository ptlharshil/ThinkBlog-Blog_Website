import React from 'react'
import "./signup.css"
import {Link} from "react-router-dom"

export default function Signup() {
    return (
        <div className="signup">
            <span className="i">i</span>
            <div className="signupwrapper">
                <form className="signupform"> 
                    
                    <h1 className="signuptitle">Get Started</h1>
                    <input type="text" className="signupUsername" placeholder="Username"/>
                    <input type="email" className="signupemail" placeholder="Email"/>
                    <input type="password" className="signupPass" placeholder="Password"/>
                    <button className="signupbutton"><Link to="/login" style={{textDecoration:"none", color:"inherit"}}>Submit</Link></button>
                </form>
            </div>
        </div>
    )
}
