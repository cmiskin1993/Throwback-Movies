import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Movies/MovieCard.css'
import { useState } from 'react'



const MovieCard = ({ movie, likes, setLikes, user }) => {

    const {title, image, id} = movie

    const [isLiked, setIsLiked] = useState(false)
    const [alreadyLiked, setAlreadyLike] = useState([])

    console.log(user)


    const onClick = (e) => {
        e.preventDefault()


    const movieObj = {
        title: movie.title,
        description: movie.description,
        genre: movie.genre,
        image: movie.image,
        user_id: user.id,
    }

fetch('/movies', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(movieObj)
})
    .then(r => r.json())
    .then(data => saveLike(data))

const saveLike = (movieData) => {
    const likeObj = {
        movie_id: movieData.id,
        user_id: user.id
    }

    console.log(likeObj)
    fetch('/likes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(likeObj)
    })
        .then(r => r.json())
        .then(console.log)
}
setIsLiked(!isLiked)
}


    return (
        <div>
            <div className='card'>
                <img src={image} className="movie-img" alt="movie-img"/>
                <NavLink to={`/movies/${id}`}> <h2 className='movie-title'>{title}</h2> </NavLink>
                <button className='like-button' onClick={onClick} >{isLiked ? "Liked" : "Like 👍"}</button>
            </div>
        </div>
    
        );
    }

export default MovieCard