import React from "react";
import {NavLink, useNavigate} from 'react-router-dom';
import '../Navigation/Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Actions/sessions';



const Navbar = () => {

  const currentUser = useSelector(state => state.sessions.currentUser)
  const updateUser = useSelector(state => state.sessions.updateUser)

  const navigate = useNavigate();

  const dispatch = useDispatch();


  const handleLogOut = e => {
    e.preventDefault();

    dispatch(logout(navigate))
    
    console.log('logged out')

  }

  // const handleLogOut = () => {
  //   fetch('/logout',{
  //     method: "DELETE"
  //   })
  //   updateUser("")
  //       navigate("/")
  // }


console.log('updateUser', updateUser)
console.log('currentUser', currentUser)

  if( updateUser ) {
  return (
    <div className="navBar">
          <ul>
            <h4 className='user-name'> {currentUser.name} </h4>
            <li><NavLink to="/" id="logo" className="active-link" >Welcome </NavLink></li>
            <li><NavLink to="/movies" >Movies</NavLink></li>
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

