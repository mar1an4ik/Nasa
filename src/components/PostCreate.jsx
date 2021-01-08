import * as React from 'react'

import pcr from "./PostCreate.module.css"
import {useState} from "react";


const PostCreate = (props) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")


    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleChangeDescr = (event) => {
        setBody(event.target.value);
    }
    const handleClick = () => {
        props.addPostThunk(title, body);
        setTitle("");
        setBody("");
        alert("Posted!")

    }
    return (
        (<div className={pcr.main}>

            <div className={pcr.mainForm}>
                <br/>
                <div className={pcr.header2}>Create your new intresting post!
                    <img alt={"logo"} className={pcr.blogLogo}
                         src={"https://www.accfb.org/wp-content/uploads/2018/06/Blog-icon.png"}/>
                </div>
                <div>
                    <textarea onChange={handleChangeTitle} value={title} className={pcr.textAreaTitle} rows={1} cols={50}
                              placeholder={"Enter title"}/>
                </div>
                <div>
                    <textarea onChange={handleChangeDescr} value={body} className={pcr.textArea} placeholder={"Enter Description"}/>
                </div>
                <div>
                    <button onClick={handleClick} className={pcr.but}>Post</button>
                </div>


            </div>


        </div>)

    )
}

export default PostCreate

