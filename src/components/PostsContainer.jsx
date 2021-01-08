import pst from "./Posts.module.css";

import React, {useEffect} from "react";
import Posts from "./Posts";
import {connect} from "react-redux";
import {setPostsThunk} from "../redux/PostsReducer";
import {withRouter,NavLink} from "react-router-dom";




const PostsContainer = (props) => {

    let arrayPosts = props.arrayPosts.map((post) => {


        return (<NavLink to={'/post' + post.id} >
            <div className={pst.post}>
                <div className={pst.title}><h3>{post.title}</h3></div>
                <img alt={"img"} className={pst.img}
                     src={"https://cdn.iconscout.com/icon/free/png-256/post-5-100382.png"}/>
                <span className={pst.body}>{post.body}</span>
                <div className={pst.id}>
                    #{post.id}
                </div>


            </div>
        </NavLink>)
    })
    useEffect(() => {
        if (!props.isLogged) {props.history.push("/login")}
    }, [props.isLogged])
    useEffect(() => {
        if (props.arrayPosts.length < 1) props.setPostsThunk(props.userId)
    }, [])
    useEffect(() => {
        if (props.arrayPosts.length < 1) props.setPostsThunk(props.userId)
    }, [props.arrayPosts.length])


    return (<Posts isLogged={props.isLogged} arrayPosts={arrayPosts}/>)
}


let stateGo = (state) => {
    return {
        arrayPosts: state.postsTree.posts, //posts
        userId:state.loginTree.userId,
        isLogged:state.loginTree.isLogged,
    }
};

export default withRouter(connect(stateGo,
    {setPostsThunk})(PostsContainer));


