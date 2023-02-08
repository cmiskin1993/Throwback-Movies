import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


    const CommentEdit = ({updateComment}) => {

    const navigate = useNavigate()
    const params = useParams();

        
    const [formData, setFormData] = useState({
        content:'',
    })
    const [errors, setErrors] = useState([])
    const {id} = useParams()
    useEffect(() => {
    fetch(`/comments/${params.commentId}`)
    .then(res => res.json())
    .then(setFormData)
    },[])

    const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    }


    function onSubmit(e){
    e.preventDefault()
    fetch(`/comments/${params.commentId}`,{
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(formData)
    })
    .then(res => {
        if(res.ok){
        res.json().then(updateComment)
        navigate(`/movies/${params.movieId}`)
        } else {
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        }
    })
    }
    return (
        <div>
    
        {errors ? errors.map(e => <div>{e[0]} {e[1]}</div>):null}

        <h2> Edit</h2>

        <form className='comments-form-container' onSubmit={onSubmit}>
            <label> Comment </label>
            <textarea name='content' value={formData.content} onChange={handleChange}  />
            <input type='submit' value='Submit' />
          </form>

        {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
        </div>

    )
    }

    export default CommentEdit