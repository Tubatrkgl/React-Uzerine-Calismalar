import React from 'react'
import {useParams} from "react-router-dom"
const Post = () => {
    
const params = useParams();
console.log(params);

  return (
    <h1>Post</h1>
  )
}

export default Post