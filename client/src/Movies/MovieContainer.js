import MovieCard from '/Users/cnestel-admin/Desktop/Flatiron-Projects/phase-5-project/Throwback-Movies/client/src/Movies/MovieCard.js'
import '../Movies/MovieCard.css'


const MovieContainer = ({movies, user}) => {


  return (
    <div>
      <h2>The Iconic Movies You Loved</h2>
        <div className='grid-container'>
            {movies?.map((movie) => (
              <MovieCard  key={movie.id} movie={movie} user={user}  />
              ))}
        </div>
</div>
  )
}

export default MovieContainer