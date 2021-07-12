import React from 'react'
import "./topbar.css"
import {Link} from "react-router-dom"
import { Context } from '../../context/Context';
import { useContext } from 'react';
export default function topbar() {
    const {user, dispatch}=useContext(Context);

    const handleLogout =()=>{
        dispatch({type:"LOGOUT"})
    }; 
    return (
        <>
           <div className="topbar">
                <h4 className="explore"><Link to="/" style={{textDecoration:"none", color:"inherit"}}>Home</Link></h4>
                {user ? (<h4 className="signin" onClick={handleLogout}>Logout</h4> )
                
            :(<> <h4 className="signin"><Link to="/login" style={{textDecoration:"none", color:"inherit"}}>Sign In</Link></h4>
            <h4 className="getstarted"><Link to="/signup" style={{textDecoration:"none", color:"inherit"}}>Get Started</Link></h4></>)}
                
            </div> 
        </>
    )
}
