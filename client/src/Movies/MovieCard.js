import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Movies/MovieCard.css'


const MovieCard = ({ movie }) => {

    const {title, image, id, genre, description} = movie


    return (
        <div className='grid-container'>
          <li className="card">
            <img src={image} className="top-card" alt="movie-img"/>
              <NavLink to={`/concerts/${id}`}> <h2>{title}</h2> </NavLink>
          </li>
        </div>
       
      );
    }

export default MovieCard