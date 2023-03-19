import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import MovieCard from '../Movies/MovieCard'
import '../Movies/MovieCard.css'


const MovieContainer = ({movies, likes, setLikes }) => {
  const currentUser = useSelector(state => state.sessions.currentUser)

  return (
    <div>
      <h2>The Iconic Movies You Loved</h2>

      <NavLink to={"/movie/new"}> <button className='add-movie'> add new movie </button> </NavLink>


        <div className='grid-container'>
            {movies?.map((movie) => (
              <MovieCard  key={movie.id} movie={movie} user={currentUser} likes={likes} setLikes={setLikes} />
              ))}
        </div>
</div>
  )
}

export default MovieContainer