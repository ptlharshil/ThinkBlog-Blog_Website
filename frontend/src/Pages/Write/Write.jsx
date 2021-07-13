import React from 'react'
import "./write.css"
import blog from "../../components/images/blog.jpg"
import { Context } from '../../context/Context';
import { useContext } from 'react';
import axios from "axios"

export default function Write() {
    const [title, setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const [file,setFile]=useState(null);
    const {user}=useContext(Context);

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const newPost={
            username:user.username,
            title,
            desc,
        };
        if(file){
            const data= new FormData();
            const filename= Date.now()+file.name;
            data.append("name",filename); 
            data.append("file",file);
            newPost.photo=filename;
            try{
                await axios.post("upload",data)
            }catch(err){

            }
        }
        try{
        const res=await axios.post("/posts",newPost);
        window.location.replace("/post/"+res.data._id)
        }catch(err){

        }
    }
    return (
        <div className="write">
            
            <form className="writeform" onSubmit={handleSubmit}>
            {file && (
                    <img src={URL.createObjectURL(file)} alt="" className="writeimg" />

            )}
            
                <div className="writeformgroup">
                    <label htmlFor="fileinput" className="attach">
                       + Attach
                    </label>
                    <input type="file" id="fileinput" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}/>
                    <input type="text" placeholder="Title" className=" writetitle" autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div className="writeformgroup">
                    <textarea type="text" className="writetext" onChange={e=>setDesc(e.target.value)} ></textarea>
                </div>
                    <button className="writesubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}
