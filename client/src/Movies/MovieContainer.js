import MovieCard from '/Users/cnestel-admin/Desktop/Flatiron-Projects/phase-5-project/Throwback-Movies/client/src/Movies/MovieCard.js'
import '../Movies/MovieCard.css'


const MovieContainer = ({movies}) => {


  return (
    <div>
        <div className='cards'>
            {movies?.map((movie) => (
              <MovieCard  key={movie.id} movie={movie}  />
              ))}
        </div>
</div>
  )
}

export default MovieContainer