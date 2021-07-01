import React from 'react'
import blog from "../images/blog.jpg"
import "./singlepost.css"
export default function singlepost() {
    return (
        <div className="singlepost">
            <div className="singlepostcontainer">
               
                <img src={blog} 
                alt="" 
                className="singlepostimg"/>
              
                <h1 className="singleposttitle">
                    NBA Updates
                <div className="SinglePostEdit">
                    <i className="SinglePostIcon far fa-edit">Edit</i>
                    <i className="SinglePostIcon far fa-trash-alt">Delete</i>
                </div>
                </h1>
                <div className="singlepostinfo">
                    <span className="singlepostauthor">Author: <b>XYZ</b></span>
                    <span className="singlepostdate">1 minute ago</span>
                </div>
                <p className="singlepostdesc">
                Columbus built it, and they came. For more than 130 
                years fans have filled stadium and arena seats to watch
                their teams play. From the "House that Harley Built" to 
                Nationwide Arena, the Arch City has a long history of 
                housing everything from football games and Rolling Stones 
                concerts to NHL games, professional wrestling matches and 
                Billy Graham crusades.Columbus built it, and they came. For more than 130 
                years fans have filled stadium and arena seats to watch
                their teams play. From the "House that Harley Built" to 
                Nationwide Arena, the Arch City has a long history of 
                housing everything from football games and Rolling Stones 
                concerts to NHL games, professional wrestling matches and 
                Billy Graham crusades.Columbus built it, and they came. For more than 130 
                years fans have filled stadium and arena seats to watch
                their teams play. From the "House that Harley Built" to 
                Nationwide Arena, the Arch City has a long history of 
                housing everything from football games and Rolling Stones 
                concerts to NHL games, professional wrestling matches and 
                Billy Graham crusades.Columbus built it, and they came. For more than 130 
                years fans have filled stadium and arena seats to watch
                their teams play. From the "House that Harley Built" to 
                Nationwide Arena, the Arch City has a long history of 
                housing everything from football games and Rolling Stones 
                concerts to NHL games, professional wrestling matches and 
                Billy Graham crusades.Columbus built it, and they came. For more than 130 
                years fans have filled stadium and arena seats to watch
                their teams play. From the "House that Harley Built" to 
                Nationwide Arena, the Arch City has a long history of 
                housing everything from football games and Rolling Stones 
                concerts to NHL games, professional wrestling matches and 
                Billy Graham crusades.
                </p>
            </div>
        </div>
    )
}
