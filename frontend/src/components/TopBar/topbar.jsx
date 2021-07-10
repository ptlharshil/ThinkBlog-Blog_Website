import React from 'react'
import "./topbar.css"
import {Link} from "react-router-dom"
export default function topbar() {
    const user=false;
    return (
        <>
           <div className="topbar">
                <h4 className="explore"><Link to="/" style={{textDecoration:"none", color:"inherit"}}>Home</Link></h4>
                {user ? (<h4 className="signin"><Link to="/home" style={{textDecoration:"none", color:"inherit"}}>Logout</Link></h4> )
                
            :(<> <h4 className="signin"><Link to="/login" style={{textDecoration:"none", color:"inherit"}}>Sign In</Link></h4>
            <h4 className="getstarted"><Link to="/signup" style={{textDecoration:"none", color:"inherit"}}>Get Started</Link></h4></>)}
                
            </div> 
        </>
    )
}
