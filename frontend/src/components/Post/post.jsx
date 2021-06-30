import React from 'react'
import "./post.css"
export default function post() {
    return (
        <>
            <div className="post">
                <img src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" 
                alt="" 
                className="postimg" />
                <div className="postinfo">
                    <div className="postCats">
                        <span className="postCat">Sport</span>
                    </div>
                    <span className="postTitle">
                        NBA updates
                    </span>
                    <hr/>
                    <span className="postDate">1 minute ago</span>
                </div>
                <p className="postDesc">
                Columbus built it, and they came. For more than 130 
                years fans have filled stadium and arena seats to watch
                their teams play. From the "House that Harley Built" to 
                Nationwide Arena, the Arch City has a long history of 
                housing everything from football games and Rolling Stones 
                concerts to NHL games, professional wrestling matches and 
                Billy Graham crusades.
                </p>
            </div>  
        </>
    )
}
