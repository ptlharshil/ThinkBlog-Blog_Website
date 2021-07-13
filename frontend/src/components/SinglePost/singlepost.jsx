import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import blog from "../images/blog.jpg"
import "./singlepost.css"
import {Link} from "react-router-dom"
import { Context } from '../../context/Context'
import { useContext } from 'react'
import axios from 'axios'
// import { update } from '../../../../backend/models/User'

export default function singlepost() {
    const PF="http://localhost:5000/images/"
    const location=useLocation();
    const path=location.pathname.splice("/")[2];
    const [post,setPost]=useState({});
    const [cat,setCat]=useState([])
    const {user}=useContext(Context);
    const [title,setTitle]=useState("");
    const [desc, setDesc]=useState("");
    const [updateMode, setUpdateMode]=useState(false);

    useEffect(() => {
        
        const getCat=async()=>{
            const res= await axios.get("/categories/"+path)
            setCat(res.data)
        }

        getCat()
    }, []);


    useEffect(()=>{
        const getPost=async()=>{
            const res=await axios.get("/posts/"+path);
            setPost(res.data);
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost();
    },[path])


    const handleDelete =async()=>{
        try{
            await axios.delete(`/posts/${post._id}`, {data: {username:user.username}
        });
            window.location.replace("/posts");
        }catch(err){

        }
        
    }

    const handleUpdate = async ()=>{
        try{
            await axios.put(`/posts/${post._id}`, {
                data:{username:user.username, title, desc}
            })
            setUpdateMode(false);
        }catch(err)
        {

        }
    }
    return (
       
        
        <div className="sp">
            <span>.</span>

            <div className="singlesidebar">
            
            <img src={PF+user.profilePic} alt="" id="pp" />

            <h4 className="usname">Author: 
                <Link to={`/posts/?user=${post.username}`}>
                    <b>{post.username}</b>
                </Link> 
            </h4>
            {cat.map((c)=>(
                <Link to={`/posts/?cat=${c.name}`}>
                    <h4 className="ctname">{cat.name}</h4>
                </Link>
            ))}
            </div>

            <div className="singlepostcontainer">

               {post.photo && (
                    <img src={PF+ post.photo} 
                    alt="" 
                    className="singlepostimg"/>
               )}

                {updateMode ? (<input type="text" value={title} className="singleposttitle" onChange={(e)=>setTitle(e.target.value)}/> ):(

                
                <h1 className="singleposttitle">
                    {title}

                {post.username===user?.username && (    
                <div className="SinglePostEdit">
                    <i className="SinglePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}>Edit</i>
                    <i className="SinglePostIcon far fa-trash-alt" onClick={handleDelete}>Delete</i>
                </div>
                )}
                </h1>
                )}

                <div className="singlepostinfo">
                    <span className="singlepostauthor">
                        Author: 
                        <Link to={`/posts/?user=${post.username}`}>
                            <b>{post.username}</b>
                        </Link>      
                    </span>
                    <span className="singlepostdate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? (<textarea className="singlepostdesc" value={desc} onChange={(e)=>setDesc(e.target.value)}/>):(
                <p className="singlepostdesc">
                    {desc}
                </p>
                )}
                {updateMode && (
                <button className="singlePostButton" onClick={handleUpdate}>Update</button>
                )}
            </div>
            
        </div>
        
    )
}
