import React from 'react'
import "./login.css"
export default function Login() {
    return (
        <div className="login">
            <span className="l">l</span>
            <div className="loginwrapper">
                <form className="loginform"> 
                    
                    <h1 className="logintitle">Login</h1>
                    <input type="text" className="loginUsername" placeholder="Username"/>
                    <input type="password" className="loginPass" placeholder="Password"/>
                    <button className="loginbutton">Submit</button>
                </form>
            </div>

        </div>
    )
}
