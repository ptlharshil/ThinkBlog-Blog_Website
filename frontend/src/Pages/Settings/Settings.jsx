import React from 'react'
import "./settings.css"
import blog from "../../components/images/blog.jpg"
import {useContext} from "react";
import {Context} from "../../context/Context"
import axios from "axios"
export default function Settings() {
    const [file,setFile]=useState(null);
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {user,dispatch}=useContext(Context);
    const [success, setSuccess] = useState(false);
    const PF="http://localhost5000/images/"

    const handleSubmit= async (e)=>{
        e.preventDefault();
        dispatch({type:"UPDATE_START"});
        const updatedUser={
            userId:user._id,
            username,
            email,
            password
            
        };
        if(file){
            const data= new FormData();
            const filename= Date.now()+file.name;
            data.append("name",filename); 
            data.append("file",file);
            updatedUser.profilePic=filename;
            try{
                await axios.post("/upload",data);
                
            }catch(err){}
        }
        try{
            const res= await axios.put("/users/"+user._id, updatedUser);
            setSuccess(true);
            dispatch({type:"UPDATE_SUCCESS",payload:res.data});
        }catch(err){
            dispatch({type:"UPDATE_FAILURE"});
        }
    };
    
    return (
        <div className="settings">

            <div className="settingwrapper">
                
                <form className="settingsform" onSubmit={handleSubmit}>
                    
                    <div className="settingsPP">
                        <img src={file ? URL.createObjectURL(file) : PF+user.profilePic} alt="" className="settingsImg"/>
                        <label htmlFor="fileInput" className="settingsPPicon">
                            + Attach
                        </label>
                        <input type="file" id="fileInput" style={{display:'none'}} onChange={(e)=>setFile(e.target.files[0])}/>
                    </div>

                    <label className="user">Username</label>

                    <input type="text" placeholder={user.username} className="username" onChange={e=>setUsername(e.target.value)}/>
                    <label className="email">Email</label>
                    <input type="email" placeholder={user.email} className="mail" onChange={e=>setEmail(e.target.value)}/>
                    <label className="password">Password</label>
                    <input type="password" className="pass" onChange={e=>setPassword(e.target.value)}/>
                    <button className="settingssubmit" type="submit"><b>Update</b></button>
                    {success && (<span style={{color:"teal"}}>Profile Updated</span>)}
                    <button className="settingsdelete"><b>Delete</b></button>
                </form>
            </div>
        </div>
    )
}
