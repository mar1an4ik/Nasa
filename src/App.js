import './App.css';
import React from "react";
import {Route} from "react-router-dom";
import PostsContainer from "./components/PostsContainer";

import PostCreateContainer from "./components/PostCreateContainer";
import PostInfoContainer from "./components/PostInfoContainer";
import NavBar from "./components/NavBar";
import Login from "./components/Login";

function App() {
    return (
        <div className='app-wrapper'>
        <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route exact path={"/"} component={PostsContainer}/>
                <Route  exact path={`/post:postId`} component={PostInfoContainer}/>
                <Route exact path={"/new"} component={PostCreateContainer}/>
                <Route exact path={"/login"} component={Login}/>


            </div>

        </div>
    );
}

export default App;
