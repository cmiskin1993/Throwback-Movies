import '../Static/Home.css';
import HomeImage from '../Assets/movie_college.webp'


const Home = () =>{

    return(
    <div>
        <div className="overlay"></div>
        <h1 className="headline"> Be Kind <br/> Rewind</h1>
        <img src={HomeImage} alt={HomeImage} />
    </div>
    )
}

export default Home