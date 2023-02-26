import  { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import './MovieDetails.css'
import '../Sessions/Form.css'
import '../Movies/CommentCard.css'
import CommentCard from './CommentCard'



const MovieDetail = () => {


  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)
  const [comments, setComments] = useState([])

  const addComment = (comment) =>
    setComments((current) => [...current, comment]);
  
  const params = useParams()

  const [formData, setFormData] = useState({
      content:''
  })
  

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`/movies/${params.movieId}/comments`,{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({...formData, ongoing: true, movie_id: movie.id})
    }).then(res => {
        if(res.ok){
        res.json().then(addComment)
        setFormData ({
          content:''
        })
        } else {
        res.json().then(data => {
            setErrors(Object.entries(data.errors))
            console.log('error', errors)

        })
        }
    })
    }


  useEffect(()=>{
    fetch(`/movies/${params.movieId}`)
    .then(res => { 
      if(res.ok){
        res.json().then(data => {
          setMovie(data)
          setLoading(false)
        })
      } else {
        // console.log('error')
        res.json().then(data => setErrors(data.error))
      }
    })
    fetch(`/movies/${params.movieId}/comments`).then((res) => {
      if (res.ok) {
        res.json().then(data => setComments(data));
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
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
        <h3>{errors ? errors.map(e => <div>{e[0]} {e[1]}</div>):null}</h3>

          <form className='comments-form-container' onSubmit={handleSubmit}>          
            <label> Comment </label>
            <textarea rows={4} cols={40} name='content' value={formData.content} onChange={handleChange}   />
            <input type='submit' value='Submit' />
          </form>
        </div>
        
        <div className='comment-grid-container'>
          {comments?.map((comment) => (
                <CommentCard  key={comment.id} movie={movie} comment={comment}  />
                ))}
        </div>
    </div>
    )
}



export default MovieDetail