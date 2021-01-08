
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {addPostThunk, setPostsThunk} from "../redux/PostsReducer";
import PostCreate from "./PostCreate";
import {withRouter} from "react-router-dom";

const PostCreateContainer = (props) => {
    useEffect(() => {
        if (props.arrayPosts.length < 1) props.setPostsThunk(1);
    }, [])
    useEffect(() => {
        if (!props.isLogged) {props.history.push("/login")}
    }, [props.isLogged])
    return (<PostCreate addPostThunk={props.addPostThunk}/>)
}

let stateGo = (state) => {
    return {
        arrayPosts: state.postsTree.posts,
        isLogged:state.loginTree.isLogged,
    }
};

export default withRouter(connect(stateGo,{setPostsThunk,addPostThunk})(PostCreateContainer));


