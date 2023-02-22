import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';


const AddMovie = ( { addMovie }) => {

    const navigate = useNavigate()

    const [errors, setErrors] = useState([])

    const [formData, setFormData] = useState({
      title:'',
      genre:'',
      description:'',
      image:'',
    })

    const onSubmit = (e) => {
        e.preventDefault()
        fetch('/movies',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({...formData, ongoing:true})
        })
        .then(res => {
            if(res.ok){
            res.json().then(addMovie)
            navigate("/movies")
            } else {
            res.json().then(data => {
                setErrors(Object.entries(data.errors))
            })
            }
        })
        }

        const handleChange = (e) => {
            const { name, value } = e.target
            setFormData({ ...formData, [name]: value })
          }


  return (


    <div>
            <h2>Add New Movie </h2>
            <h3>{errors ? errors.map(e => <div>{e[0]} {e[1]}</div>):null}</h3>
            <form className='form-container' onSubmit={onSubmit} >
                <label> Movie Title: </label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange}  />
                <label> Movie Genre: </label>
                    <input type="text" name="genre" value={formData.genre} onChange={handleChange}  />
                <label> Description: </label>
                <textarea type='text' rows='4' cols='50' name='description' value={formData.description} onChange={handleChange} />
                <label> Image: </label>
                    <input type="text" name="image" value={formData.image} onChange={handleChange}  />
                    
            <input type='submit' value='Submit' />
          </form>


    </div>
  )
}

export default AddMovie