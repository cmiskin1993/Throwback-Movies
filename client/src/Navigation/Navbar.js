import { useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import '../Navigation/Navbar.css'


const Navbar = ({ currentUser, updateUser }) => {


  const navigate = useNavigate()



  const handleLogOut = () => {
    fetch('/logout',{
      method: "DELETE"
    })
    updateUser("")
        navigate("/")
  }

  if( currentUser ) {
  return (
    <div className="navBar">
          <ul>
            <li><NavLink to="/" id="logo" className="active-link" >Welcome</NavLink></li>
            <button  className='logout-button' onClick={handleLogOut}>Log Out</button>          
            </ul>
    </div>
    )
  }
  return (
    <div className="navBar">
        <ul>
          <li><NavLink to="/" id="logo" className="active-link" >Welcome</NavLink></li>

          <li><NavLink to='/signup' className="active-link">Sign Up</NavLink></li>
          <li><NavLink to='/login' className="active-link">Login</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar

