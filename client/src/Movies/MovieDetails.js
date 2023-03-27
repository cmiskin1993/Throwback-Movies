import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./MovieDetails.css";
import "../Sessions/Form.css";
import "../Movies/CommentCard.css";
import CommentCard from "./CommentCard";

const MovieDetail = ({ removeMovie }) => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);
  const [comments, setComments] = useState([]);

  const currentUser = useSelector((state) => state.sessions.currentUser);

  const addComment = (comment) =>
    setComments((current) => [...current, comment]);

  const params = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/movies/${params.movieId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, ongoing: true, movie_id: movie.id }),
    }).then((res) => {
      if (res.ok) {
        res.json().then(addComment);
        setFormData({
          content: "",
        });
      } else {
        res.json().then((data) => {
          setErrors(Object.entries(data.errors));
        });
      }
    });
  };

  useEffect(() => {
    fetch(`/movies/${params.movieId}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setMovie(data);
          setLoading(false);
        });
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
    fetch(`/movies/${params.movieId}/comments`).then((res) => {
      if (res.ok) {
        res.json().then((data) => setComments(data));
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

  console.log(comments);

  if (loading) return <h1>Loading</h1>;
  if (errors) return <h1>{errors}</h1>;

  const { id, title, genre, image, description } = movie;

  const handleDelete = () => {
    fetch(`/movies/${params.movieId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        removeMovie(id);
        navigate(`/movies`);
      } else {
        res
          .json()
          .then((data) =>
            setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
          );
      }
    });
  };

  return (
    <div>
      <div>
        <img className="movie" src={image} alt="movie-img" />
        <h2>{title}</h2>
        <h3 className="genre">{genre}</h3>
        <p>{description}</p>
      </div>

      <div>
        <h3>
          {errors
            ? Object.entries(errors).map((error, i) => (
                <div key={i}> {`${error[1]}`} </div>
              ))
            : null}
        </h3>

        {movie.user_id === currentUser.id ? (
          <button onClick={handleDelete}>Delete</button>
        ) : null}

        <form className="comments-form-container" onSubmit={handleSubmit}>
          <label> Comment </label>
          <textarea
            rows={4}
            cols={40}
            name="content"
            value={formData.content}
            onChange={handleChange}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>

      <div className="comment-grid-container">
        {comments?.map((comment) => (
          <CommentCard key={comment.id} movie={movie} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;
