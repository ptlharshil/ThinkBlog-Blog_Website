import React from 'react'
import "./brain.css"
import br from "../images/brain.png"
export default function brain() {
    return (
        <>
            <div className="brainContainer">
                <img src={br} alt="" className="brain"/>
            </div>
        </>
    )
}
