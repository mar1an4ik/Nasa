import {api} from "../api/api";


let initialState = {
    userName: "",
    isLogged: false,
    userId:0,
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setAuth": {
            let statecopy = {...state};
            statecopy.userName = action.userName
            statecopy.isLogged = true
            statecopy.userId = action.userId
            debugger;
            return statecopy;
        }
        default : {
            return state;
        }
    }

};
export const setAuth = (userName,id) => {
    return {
        type: "setAuth",
        userName: userName,
        userId:id,
    }
}

export const loginThunk = (userName) => {
        let valid=false;
    return (dispatch) => {
        api.getUsers().then(data => {

            for (let key of Object.values(data)) {

                if (key.username == userName) {

                    dispatch(setAuth(userName,key.id))
                    valid=true;
                    break;
                }
            }
            if (valid===false) {alert("No such user")}

        })
    }
}


export default LoginReducer;
