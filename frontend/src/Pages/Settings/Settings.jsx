import React from 'react'
import "./settings.css"
import blog from "../../components/images/blog.jpg"
export default function Settings() {
    return (
        <div className="settings">
            <div className="settingwrapper">
                <div className="settingstitle">
                    <span className="settingsupdatetitle">
                        Update your Account
                    </span>
                    <span className="settingsdeletetitle">
                        Delete Account
                    </span>
                </div>
                <form className="settingsform">
                    <label >Profile Picture</label>
                    <div className="settingsPP">
                        <img src={blog} alt="" />
                        <label htmlFor="fileInput" className="settingsPPicon">
                            + Attach
                        </label>
                        <input type="file" id="fileInput" style={{display:'none'}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="XYZ"/>
                    <label>Email</label>
                    <input type="email" placeholder="Email"/>
                    <label>Password</label>
                    <input type="password" placeholder="Password"/>
                    <button className="settingssubmit">Update</button>
                </form>
            </div>
        </div>
    )
}
