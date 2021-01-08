import posts from "./Posts.module.css"
import * as React from "react";
import {useEffect} from "react";
import {Redirect} from "react-router-dom";



const Posts=(props)=>{


    return( <div className={posts.main}>

        <h1 className={posts.h1}>Your posts:</h1>


        {props.arrayPosts.reverse()}

    </div>)
}

export default Posts
