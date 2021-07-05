import React from 'react'
import "./settings.css"
import blog from "../../components/images/blog.jpg"
export default function Settings() {
    return (
        <div className="settings">

            <div className="settingwrapper">
                
                <form className="settingsform">
                    
                    <div className="settingsPP">
                        <img src={blog} alt="" className="settingsImg"/>
                        <label htmlFor="fileInput" className="settingsPPicon">
                            + Attach
                        </label>
                        <input type="file" id="fileInput" style={{display:'none'}}/>
                    </div>

                    <label className="user">Username</label>

                    <input type="text" placeholder="Username" className="username"/>
                    <label className="email">Email</label>
                    <input type="email" placeholder="Email" className="mail"/>
                    <label className="password">Password</label>
                    <input type="password" placeholder="Password" className="pass"/>
                    <button className="settingssubmit"><b>Update</b></button>
                    <button className="settingsdelete"><b>Delete</b></button>
                </form>
            </div>
        </div>
    )
}
