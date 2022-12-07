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



  return (
    <div className="navBar">
          <ul>
            <button><NavLink to="/" id="logo" className="active-link" >Welcome</NavLink></button>
              <button><NavLink to='/signup' className="active-link">Sign Up</NavLink></button>
              <button><NavLink to='/login' className="active-link">Login</NavLink></button>
          </ul>

        <div> {currentUser ? <button  className='logout-button' onClick={handleLogOut}>Log Out</button>  : null }</div>

    </div>
  );
}

export default Navbar