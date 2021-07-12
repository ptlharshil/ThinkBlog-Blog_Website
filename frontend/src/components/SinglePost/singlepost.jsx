import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import blog from "../images/blog.jpg"
import "./singlepost.css"
import {Link} from "react-router-dom"
export default function singlepost() {

    const location=useLocation();
    const path=location.pathname.splice("/")[2];
    const [post,setPost]=useState({});
    const [cat,setCat]=useState([])

    useEffect(() => {
        
        const getCat=async()=>{
            const res= await axios.get("/categories"+path)
            setCat(res.data)
        }

        getCat()
    }, []);


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
                        <Link to={`/posts/?user=${post.username}`}>
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
