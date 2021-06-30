import React from 'react'
import Title from "../../components/Title/title"
import Description from "../../components/Description/description"
import Brain from "../../components/Brain/brain"
import TopBar from "../../components/TopBar/topbar"
import Posts from "../../components/Posts/posts"
export default function home() {
    return (
        <div className="home">
            {/* <TopBar/> */}
            <Title/>
            
            <Description/>
            
            <Brain/>
            <Posts/>
        </div>
    )
}
