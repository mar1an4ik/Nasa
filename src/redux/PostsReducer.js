
import {ThunkAction} from "redux-thunk";
import {api} from "../api/api";


let initialState = {
    posts: [] ,

};



const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setPosts": {
            let statecopy = {...state};
            statecopy.posts = [...state.posts]
            statecopy.posts = action.arrayPosts
            return statecopy;
        }
        case "addPost": {
            let statecopy = {...state};
            statecopy.posts = [...state.posts]
            statecopy.posts.push({
                title: action.title,
                body: action.body,
                id: statecopy.posts[statecopy.posts.length - 1].id + 1,
            });
            return statecopy;
        }
        default: {
            return state;
        }
    }
};
export const actions2 = {
    setPosts: (arrayPosts) => {
        return {
            type: "setPosts",
            arrayPosts: arrayPosts,
        }
    },
    addPost: (title, body) => {
        return {
            type: "addPost",
            title: title,
            body: body,
        }
    },
}

export const setPostsThunk = (userId) => async (dispatch) => {

    const response = await api.getPosts(userId);

    dispatch(actions2.setPosts(response)); //get from api and set to REDUX
}
export const addPostThunk = (title, body) => async (dispatch) => {
    await api.addPost(title, body);
    dispatch(actions2.addPost(title, body)); //get from api and set to REDUX
}


export default PostsReducer;
