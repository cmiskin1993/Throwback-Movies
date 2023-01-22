import  { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import './MovieDetails.css'
import '../Sessions/Form.css'
import '../Movies/CommentsCard.css'
import CommentsCard from './CommentsCard'



const MovieDetail = ({currentUser, addComment, comments}) => {


  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)
  
  const params = useParams()

  const [formData, setFormData] = useState({
      content:''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    fetch('/comments',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({...formData, ongoing: true, movie_id: movie.id})
    })
    .then(res => {
        if(res.ok){
        res.json().then(addComment)
        console.log(addComment)
        } else {
        res.json().then(data => {
            setErrors(Object.entries(data.errors))
        })
        }
    })
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




console.log(comments)
  

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

        <div>
          <form className='comments-form-container' onSubmit={onSubmit}>
            <label> Comment </label>
            <textarea name='content' value={formData.content} onChange={handleChange} />
            <input type='submit' value='Submit' />
          </form>
        </div>
        
        <div className='comment-grid-container'>
          {comments?.map((comment) => (
                <CommentsCard  key={comment.id} comment={comment} />
                ))}
        </div>

    </div>
    )
}


export default MovieDetail