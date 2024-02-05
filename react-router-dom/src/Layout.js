import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Outlet/>
      <nav>
        <ul>
          <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "pink" })} to="">Home</NavLink>
          <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "pink" })} to="about">About</NavLink>
          <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "pink" })} to="blog">Blog</NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Layout
