import React from 'react'
import Title from "../../components/Title/title"
import Description from "../../components/Description/description"
import Brain from "../../components/Brain/brain"
import TopBar from "../../components/TopBar/topbar"
import Posts from "../../components/Posts/posts"
import axios from "axios"
import { useLocation } from 'react-router-dom'
export default function home() {
    const [posts,setPosts]=useState([]);
    const {search}=useLocation()
    useEffect(()=>{
        const fetchPosts=async()=>{
            const res=await axios.get("/posts"+search);
            setPosts(res.data);
        };

        fetchPosts();
    },[search]);
    return (
        <div className="home">
            {/* <TopBar/> */}
            <Title/>
            
            <Description/>
            
            <Brain/>
            <Posts posts={posts}/>
        </div>
    )
}
