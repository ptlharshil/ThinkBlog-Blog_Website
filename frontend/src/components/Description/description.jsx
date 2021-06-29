import React from 'react'
import "./description.css"

export default function description() {
    return (
        <>
        <div className="descriptionContainer">
            <h1 className="description">Categories</h1>
            <ul className="list">
                <li className="items music">Music</li>
                <li className="items life">Life</li>
                <li className="items sport">Sport</li>
                <li className="items lifestyle">Lifestyle</li>
                <li className="items technology">Technology</li>
                
                
            </ul>
        </div>   
        </>
    )
}
