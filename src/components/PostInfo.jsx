import inf from "./PostInfo.module.css"
import React from "react";

const PostInfo = (props) => {
    let id = Number(props.id);
    let error="Not found"
    let ourElement=props.arrayPosts.find((elem)=>{
    return elem.id==id
})
    return (<div className={inf.main}>
        <div className={inf.title}>{ourElement?ourElement.title:error}</div>
        <div className={inf.body}>{ourElement?ourElement.body:error}</div>
        <div className={inf.id}>#{ourElement?ourElement.id:error}</div>

    </div>)
}
export default PostInfo

