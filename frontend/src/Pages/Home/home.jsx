import React from 'react'
import Title from "../../components/Title/title"
import Description from "../../components/Description/description"
import Brain from "../../components/Brain/brain"

export default function home() {
    return (
        <div className="home">
            <Title/>
            <Description/>
            <Brain/>
        </div>
    )
}
