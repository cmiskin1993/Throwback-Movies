import '../Static/Home.css';
import Gif from '../Assets/HomeVideo.gif'


const Home = () =>{

    return(
    <div>
        <div className="overlay"></div>
        <h1 className="headline"> Be Kind <br/> Rewind</h1>
        <img src={Gif}  alt="gif" />
    </div>
    )
}

export default Home