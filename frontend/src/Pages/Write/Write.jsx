import React from 'react'
import "./write.css"
import blog from "../../components/images/blog.jpg"

export default function Write() {
    return (
        <div className="write">
            
            <form className="writeform">
            <img src={blog} alt="" className="writeimg" />
                <div className="writeformgroup">
                    <label htmlFor="fileinput" className="attach">
                       + Attach
                    </label>
                    <input type="file" id="fileinput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className=" writetitle" autoFocus={true}/>
                </div>
                <div className="writeformgroup">
                    <textarea type="text" className="writetext" ></textarea>
                </div>
                    <button className="writesubmit">Publish</button>
            </form>
        </div>
    )
}
