import { useEffect, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'

const User = () => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    const [users, setUsers] = useState([])

    const navigate = useNavigate()

    
    const params = useParams()
    const {id} = params

    useEffect(()=>{
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setUser(user)
                    setLoading(false)
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
    },[])

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>

    const deleteUser = (id) => setUsers(current => current.filter(user => user.id !== id))


    const handleDelete = () => {
        fetch(`/users/${user.id}`,{
          method:'DELETE',
          headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
          if(res.ok){
            deleteUser(id)
            navigate('/')
          }
        })
      }
    

    return (
    <div>
        <h2>{user.name}</h2>
                <div className='grid-container'>
                </div>
            <button onClick={handleDelete}>Delete Account</button>
    </div>
    )
}

export default User