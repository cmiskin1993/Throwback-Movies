import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "../src/App.css";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./Actions/sessions";

import Home from "./Static/Home";
import Navbar from "./Navigation/Navbar";
import Login from "./Sessions/Login/Login";
import Signup from "./Sessions/Signup/Signup";
import User from "./User/User";
import MovieContainer from "./Movies/MovieContainer";
import AddMovie from "./Movies/AddMovie";
import MovieDetail from "./Movies/MovieDetails";
import CommentDetails from "./Movies/CommentDetails";
import CommentEdit from "./Movies/CommentEdit";
import About from "./Static/About";
import PageNotFound from "./Errors/PageNotFound";

const App = () => {
  const currentUser = useSelector((state) => state.sessions.currentUser);
  const dispatch = useDispatch();

  const [errors, setErrors] = useState(false);
  const [user, setUser] = useState([]);
  const [movies, setMovies] = useState([]);
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [newMovie, setNewMovie] = useState([]);

  /**
   * Called when app first loads.
   *
   * Fetches current user (if logged in), movies, and likes. If
   * user is NOT logged in, current user, movies, and likes will
   * be empty.
   */
  useEffect(() => {
    dispatch(getCurrentUser());
    fetchMovies();
    fetchLikes();
  }, []);

  const fetchMovies = () => {
    fetch("/movies").then((res) => {
      if (res.ok) {
        res.json().then(setMovies);
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  };

  const fetchLikes = () => {
    fetch("/likes").then((res) => {
      if (res.ok) {
        res.json().then(setLikes);
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  };

  /**
   * Called right after user logs in on Login page.
   *
   * Fetches movies and likes now that user is logged in.
   */
  const onLogin = () => {
    fetchMovies();
    fetchLikes();
  };

  const deleteComment = (id) =>
    setComments((current) => current.filter((comment) => comment.id !== id));

  const removeMovie = (id) =>
    setMovies((current) => current.filter((movie) => movie.id !== id));

  if (errors) return <h1>{errors}</h1>;

  const updateComment = (updatedComment) =>
    setComments((current) => {
      return current.map((comment) => {
        if (comment.id === updateComment.id) {
          return updatedComment;
        } else {
          return comment;
        }
      });
    });

  const onMovieAdded = () => {
    fetchMovies();
  };

  const addNewMovie = (newMovie) =>
    setNewMovie((current) => [...current, newMovie]);

  return (
    <div className="global-style">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="/signup" element={<Signup onLogin={onLogin} />} />
          <Route path="/users/:id" element={<User />} />
          <Route
            path="/movies"
            element={
              <MovieContainer
                movies={movies}
                likes={likes}
                setLikes={setLikes}
                setUser={setUser}
                addNewMovie={addNewMovie}
              />
            }
          />
          <Route path="/about" element={<About />} />

          <Route
            path="/movies/:movieId"
            element={
              <MovieDetail comments={comments} removeMovie={removeMovie} />
            }
          />
          <Route
            path="/movies/:movieId/comments/:commentId"
            element={
              <CommentDetails
                deleteComment={deleteComment}
                currentUser={currentUser}
              />
            }
          />
          <Route
            path="/movies/:movieId/comments/:commentId/edit"
            element={
              <CommentEdit updateComment={updateComment} comments={comments} />
            }
          />

          <Route
            path="/movie/new"
            element={<AddMovie onMovieAdded={onMovieAdded} />}
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
