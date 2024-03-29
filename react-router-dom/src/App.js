import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from './pages/Blog'
import Layout from "./Layout"
import Post from "./pages/Post"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:postId' element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
