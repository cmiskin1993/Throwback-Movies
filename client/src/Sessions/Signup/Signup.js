import React, {useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import '../Form.css'
import { useSelector, useDispatch } from 'react-redux'
import { signup } from '../../Actions/sessions'

const Signup = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
    })
    
    // const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch();


    const {name, email, password} = formData


    const handleChange = e => {
        setFormData({ 
            ...formData, [e.target.name]: e.target.value
    })
}

const onSubmit = async e => {
    e.preventDefault();

    
    dispatch(signup(formData, navigate))
  }

    // const onSubmit = (e) =>{
    //     e.preventDefault()
    //     const user = {
    //         name,
    //         email,
    //         password,
    //     }
    
    //     fetch(`/users`,{
    //         method:'POST',
    //         headers:{'Content-Type': 'application/json'},
    //         body:JSON.stringify(user)
    //     })
    //     .then(res => {
    //         if(res.ok){
    //             res.json().then(user => {
    //                 navigate('/movies')
    //             })
    //         }else {
    //             res.json().then(json => setErrors(Object.entries(json.errors)))
    //         }
    //     })

    // }


    return (
        <> 
        <h2>Create an Account</h2>
        <form className='form-container' onSubmit={onSubmit}>
            <label> Name </label>  
            <input type='text' name='name' value={name} onChange={handleChange} />
        
            <label> Email </label>
            <input type='text' name='email' value={email} onChange={handleChange} />
        
            <label> Password </label>
            <input type='password' name='password' value={password} onChange={handleChange} />
            
            <input type='submit' value='Sign up!' />

            <h3><NavLink className='link' to="/login" >Already have an account?</NavLink></h3>
        </form>
        </>
    )
}

export default Signup