import React from 'react'
import {Link} from "react-router-dom"
import "./login.css"
import { Context } from '../../context/Context';
import { useRef } from 'react';
import axios from 'axios';
import { useContext } from 'react';

export default function Login() {
    const userRef=useRef();
    const passwordRef=useRef(); 
    const {dispatch, isFetching}= useContext(Context)
    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try{
            const res=await axios.post("/auth/login",{
                username:userRef.current.value,
                password:passwordRef.current.value
            })
            dispatch({type:"LOGIN_SUCCESS",payload: res.data});
        }catch(err)
        {
            dispatch({type:"LOGIN_FAILURE"});
        }

    }
    return (
        <div className="login">
            <span className="l">l</span>
            <div className="loginwrapper">
                <form className="loginform" onSubmit={handleSubmit}> 
                    
                    <h1 className="logintitle">Login</h1>
                    <input type="text" className="loginUsername" placeholder="Username" ref={userRef}/>
                    <input type="password" className="loginPass" placeholder="Password" ref={passwordRef}/>
                    <button className="loginbutton" type="submit" disabled={isFetching}>Submit</button>
                </form>
            </div>

        </div>
    )
}
