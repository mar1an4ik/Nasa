import {connect} from "react-redux";

import {loginThunk} from "../redux/LoginReducer";
import React, {useEffect} from "react";
import lgn from "./Login.module.css"
import {withRouter} from "react-router-dom";


const Login = (props) => {
    let ref1=React.createRef();
    useEffect(() => {
        if (props.userName) {
            alert("Hello " + props.userName)
            props.history.push("/")
        }
    }, [props.isLogged])

    const onSubmit = () => {
        props.loginThunk(ref1.current.value)
    };

    return (<div className={lgn.loginMain}>

        <div>
        <input type={"textarea"} ref={ref1} placeholder={"UserName"}/>
        </div>
        <div>
        <input type={"password"} placeholder={"simulatedPassword"}/>
        </div>
        <button onClick={onSubmit}>Login</button>


    </div>)
};
const mapStateToProps = (state) => {
    return {
        isLogged: state.loginTree.isLogged,
        userName: state.loginTree.userName,
    }
};


export default withRouter(connect (mapStateToProps, {loginThunk})(Login));
