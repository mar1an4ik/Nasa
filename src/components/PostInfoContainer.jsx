import React, {useEffect} from "react";



import {setPostsThunk} from "../redux/PostsReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import PostInfo from "./PostInfo";
import Preloader from "../common/Preloader";


const PostInfoContainer = (props) => {

    useEffect(() => {
        if (props.arrayPosts.length < 1) props.setPostsThunk()
    }, [])
    useEffect(() => {
        if (!props.isLogged) {props.history.push("/login")}
    }, [props.isLogged])
    return (props.arrayPosts.length > 1
        ? <PostInfo id={props.match.params.postId} arrayPosts={props.arrayPosts}/>
        : <Preloader/>)
}


let stateGo = (state) => {

    return {
        arrayPosts: state.postsTree.posts,
        isLogged:state.loginTree.isLogged
    }
};

export default compose(
    connect(stateGo, {setPostsThunk}),
    withRouter,
)(PostInfoContainer);


