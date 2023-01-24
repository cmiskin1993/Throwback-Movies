import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "../src/App.css";

import Home from "./Static/Home";
import Navbar from "./Navigation/Navbar";
import Login from "./Sessions/Login/Login";
import Signup from "./Sessions/Signup/Signup";
import User from "./User/User";
import MoviePage from "./Movies/MovieContainer";
import MovieDetail from "./Movies/MovieDetails";
import CommentDetails from "./Movies/CommentDetails";
import CommentEdit from "./Movies/CommentEdit";

import PageNotFound from "./Errors/PageNotFound";

const App = () => {
  const [errors, setErrors] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const [movies, setMovies] = useState([]);
  const [likes, setLikes] = useState([]);
  const [user, setUser] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          updateUser(user);
          setUser(user);
          fetchMovies();
          fetchComments();
          fetchLikes();
        });
      }
    });
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

  const fetchComments = () => {
    fetch("/comments").then((res) => {
      if (res.ok) {
        res.json().then(setComments);
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

  const updateUser = (user) => setCurrentUser(user);

  const addComment = (comment) =>
    setComments((current) => [...current, comment]);

    const deleteComment = (id) => setComments(current => current.filter(comment => comment.id !== id))


  if (errors) return <h1>{errors}</h1>;

  const updateComment = (updatedComment) => setComments(current => {
    return current.map(comment => {
     if(comment.id === updateComment.id){
       return updatedComment
     } else {
       return comment
     }
    })
  })

  return (
    <div className="global-style">
      <Router>
        <Navbar currentUser={currentUser} updateUser={updateUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login updateUser={updateUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/users/:id" element={<User updateUser={updateUser} />} />
          <Route path="/movies" element={ <MoviePage movies={movies} likes={likes} setLikes={setLikes} user={user} setUser={setUser} />} />
          <Route path="/movies/:id" element={ <MovieDetail addComment={addComment} comments={comments} />} />
          <Route path="/comments/:id" element = {<CommentDetails deleteComment={deleteComment} currentUser={currentUser} />} />
          <Route path="/comments/:id/edit" element = {<CommentEdit updateComment={updateComment} comments={comments} />} />



          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
