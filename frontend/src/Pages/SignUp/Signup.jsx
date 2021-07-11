import React from 'react'
import "./signup.css"
import {Link} from "react-router-dom"

export default function Signup() {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(false);

    const handleSubmit=async (e)=>{
        e.preventDefault();
        setError(false);
        try{
            const res=await axios.post("/auth/signup",{
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        }catch(err){
            setError(true);
        }
    }

    return (
        <div className="signup">
            <span className="i">i</span>
            <div className="signupwrapper">
                <form className="signupform" onSubmit={handleSubmit}> 
                    
                    <h1 className="signuptitle">Get Started</h1>
                    <input type="text" className="signupUsername" placeholder="Username" onChange={e=>setUsername(e.target.value)}/>
                    <input type="email" className="signupemail" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                    <input type="password" className="signupPass" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                    <button className="signupbutton" type="submit">Submit</button>
                    {error && <span>Something went wrong</span>}
                </form>
            </div>
        </div>
    )
}
