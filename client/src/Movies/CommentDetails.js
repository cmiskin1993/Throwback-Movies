import  { NavLink, useParams, useNavigate } from 'react-router-dom'
import {useEffect, useState} from 'react'
import '../Movies/CommentCard.css';



const CommentDetails = ({deleteComment}) => {


  const [comment, setComment] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)
  
  const params = useParams()
  const navigate = useNavigate()


  useEffect(()=>{
    fetch(`/comments/${params.id}`)
    .then(res => { 
      if(res.ok){
        res.json().then(data => {
          setComment(data)
          setLoading(false)
        })
      } else {
        console.log('error')
        res.json().then(data => setErrors(data.error))
      }
    })
  },[])

  const handleDelete = () => {
    fetch(`/comments/${params.id}`,{
      method:'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      if(res.ok){
        deleteComment(id)
        navigate('/movies')
      } else {
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }


  

  if(loading) return <h1>Loading</h1>
  if(errors) return <h1>{errors}</h1>

  const {id, content} = comment 
  
  return (
    <div className='comment-card'>
        <div className='card-top'>
                <p>{content}</p>
            <div className='center-buttons'>
                <NavLink to={`/comments/${id}/edit`}> <button>Edit</button> </NavLink>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    </div>
    )
  }


  
  export default CommentDetails