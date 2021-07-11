import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import blog from "../images/blog.jpg"
import "./singlepost.css"
import {Link} from "react-router-dom"
export default function singlepost() {

    const location=useLocation();
    const path=location.pathname.splice("/")[2];
    const [post,setPost]=useState({});
    useEffect(()=>{
        const getPost=async()=>{
            const res=await axios.get("/posts"+path);
            setPost(res.data);
        }
        getPost();
    },[path])
    return (
       
        
        <div className="sp">
            <span>.</span>

            <div className="singlesidebar">
            
            <img src={blog} alt="" id="pp" />
            <h4 className="usname">Author: XYZ</h4>
            <h4 className="ctname">Category: Sport</h4>
            
            </div>

            <div className="singlepostcontainer">

               {post.photo && (
                    <img src={post.photo} 
                    alt="" 
                    className="singlepostimg"/>
               )}
                
                <h1 className="singleposttitle">
                    {post.title}
                <div className="SinglePostEdit">
                    <i className="SinglePostIcon far fa-edit">Edit</i>
                    <i className="SinglePostIcon far fa-trash-alt">Delete</i>
                </div>
                </h1>
                <div className="singlepostinfo">
                    <span className="singlepostauthor">
                        Author: 
                        <Link to={`/?user=${post.username}`}>
                            <b>{post.username}</b>
                        </Link>      
                    </span>
                    <span className="singlepostdate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlepostdesc">
                    {post.desc}
                </p>
            </div>
            
        </div>
        
    )
}
