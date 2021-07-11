import React from 'react'
import { Link } from 'react-router-dom'
import "./description.css"

export default function description() {
    const [cat,setCats]=useState([])

    useEffect(() => {
        
        const getCats=async()=>{
            const res= await axios.get("/categories")
            setCats(res.data)
        }

        getCats()
    }, [])

    return (
        <>
        <div className="descriptionContainer">
            <h1 className="description">Categories</h1>
            <ul className="list">
                {cat.map((c)=>(
                    <Link to={`/?cat=${c.name}`}>
                        <li className="items music">{c.name}</li>
                    </Link>
                ))}
                
                {/* <li className="items life">Life</li>
                <li className="items sport">Sport</li>
                <li className="items lifestyle">Lifestyle</li>
                <li className="items technology">Technology</li> */}
                
                
            </ul>
        </div>   
        </>
    )
}
