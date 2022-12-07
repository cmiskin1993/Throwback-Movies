import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../Form.css'

const Login = ({ updateUser }) => {
    
const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:''
})
const [errors, setErrors] = useState([])

const navigate = useNavigate()

const {name, password} = formData

const onSubmit = (e) =>{
    e.preventDefault()
    const user = {
        name,
        password
    }
    fetch(`/login`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            res.json().then(user => {
                updateUser(user)
                navigate(`/users/${user.id}`)
            })
        }else {
            res.json().then(json => setErrors(json.errors))
        }
    })
    
}

const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    }

    
return (
    <> 
    <h2>Login</h2>
    <form className='form-container' onSubmit={onSubmit}>
    <label> Name </label>
    <input type='text' name='name' value={name} onChange={handleChange} />
    
    <label> Password </label>
    <input type='password' name='password' value={password} onChange={handleChange} />
    
    <input type='submit' value='Log in!' />
    </form>
    <h2>{errors? <div>{errors}</div>:null} </h2>

    </>
)
}

export default Login