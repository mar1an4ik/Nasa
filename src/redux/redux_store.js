import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import PostsReducer from "./PostsReducer";
import LoginReducer from "./LoginReducer";


let reducers = combineReducers({
    postsTree: PostsReducer,
    loginTree:LoginReducer,
});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;