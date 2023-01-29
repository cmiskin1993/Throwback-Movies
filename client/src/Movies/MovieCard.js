import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Movies/MovieCard.css";
import { useState } from "react";

const MovieCard = ({ movie, likes, setLikes, user }) => {
  const { title, image, id } = movie;
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => { 
    if (!likes) return;
    const foundLike = likes.find((like) => like.user_id === user.id && like.movie_id === movie.id )
    setIsLiked(!!foundLike);
}, [likes])

  console.log(user);

  const createMovie = () => {
    const movieObj = {
      title: movie.title,
      description: movie.description,
      genre: movie.genre,
      image: movie.image,
      user_id: user.id,
    };

    fetch("/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieObj),
    }).then((r) => r.json());
  };

  const onClick = (e) => {
    e.preventDefault();
    if (isLiked) return;

    const saveLike = () => {
      const likeObj = {
        movie_id: movie.id,
        user_id: user.id,
      };

      console.log(likeObj);

      fetch("/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(likeObj),
      })
        .then((r) => r.json())
        .then(console.log);
    };

    saveLike();
    setIsLiked(!isLiked);
  };

  return (
    
      <NavLink to={`/movies/${id}`}><div className="card">
        <img src={image} className="movie-img" alt="movie-img" />
         {" "} <h2 className="movie-title">{title}</h2>{" "}
        <button className="like-button" onClick={onClick}>
          {isLiked ? "Liked" : "Like 👍"}
        </button>
    </div></NavLink>
  );
};

export default MovieCard;
