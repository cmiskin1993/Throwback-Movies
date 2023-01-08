import  { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import './MovieDetails.css'
import '../Sessions/Form.css'



const MovieDetail = ({currentUser}) => {


  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)
  
  const params = useParams()

  const onSubmit = (e) =>{
    e.preventDefault()
  }

  useEffect(()=>{
    fetch(`/movies/${params.id}`)
    .then(res => { 
      if(res.ok){
        res.json().then(data => {
          setMovie(data)
          setLoading(false)
        })
      } else {
        console.log('error')
        res.json().then(data => setErrors(data.error))
      }
    })
  },[])





  

  if(loading) return <h1>Loading</h1>
  if(errors) return <h1>{errors}</h1>

  const {id, title, genre, image, description} = movie 
  
  return (
    <div>
        <div>
        <img className='movie' src={image} alt="movie-img"/>
            <h2>{title}</h2>
            <h3 className='genre'>{genre}</h3>
            <p>{description}</p>
        </div>

          <form className='comments-form-container' onSubmit={onSubmit}>
            <label> Comment </label>
            <textarea name='comment' />
            <input type='submit' value='Submit' />
          </form>
    </div>
    )
}


export default MovieDetail