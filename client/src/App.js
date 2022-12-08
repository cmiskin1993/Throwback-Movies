import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {useEffect, useState} from 'react'
import '../src/App.css'


import Home from './Static/Home'
import Navbar from './Navigation/Navbar'
import Login from './Sessions/Login/Login'
import Signup from './Sessions/Signup/Signup'
import User from './User/User'

import PageNotFound from './Errors/PageNotFound'



const App = () => {

  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)




  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          updateUser(user);
        });
      }
    })
  },[])



  const updateUser = (user) => setCurrentUser(user)


 
  
  if(errors) return <h1>{errors}</h1>


  return (
    <div className='global-style'>
    <Router>
    <Navbar currentUser={currentUser} updateUser={updateUser}  />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/login" element={ <Login updateUser={updateUser} /> } />
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/users/:id" element={ <User updateUser={updateUser} /> } />
          
          <Route path="*" element={<PageNotFound />} />
          </Routes>
      </Router>

    </div>
  )
}

export default App
