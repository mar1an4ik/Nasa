import axios from "axios";


const instance = axios.create({});

export const api = {

    getPosts(userId) {

        return instance.get("https://jsonplaceholder.typicode.com/posts?userId="+userId).then((response) => {

            return response.data
        });
    },

    addPost(title, body) {
        return instance.post("https://jsonplaceholder.typicode.com/posts", {title, body});
    },
    getUsers(){
        return axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
           return response.data
        })
    }



};
