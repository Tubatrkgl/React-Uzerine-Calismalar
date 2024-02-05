import React from 'react'
import {Link} from "react-router-dom"
const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        <Link to="/blog/1">Post #1</Link>
        <Link to="/blog/2">Post #2</Link>
        <Link to="/blog/3">Post #3</Link>
      </ul>
    </div>
  )
}

export default Blog