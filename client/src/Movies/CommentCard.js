import React from "react";
import { NavLink } from "react-router-dom";
import "../Movies/CommentCard.css";


const CommentCard = ({ comment, movie }) => {


  const { id } = comment;

// console.log("comment name", comment.user.name);

  return (
    <NavLink to={`/movies/${movie.id}/comments/${id}`}>
      <div className="comment-card">
        <div className="card-top">
            <h4 className="edit-link">edit</h4>
        </div>
        <p className="comment">{comment.content}</p>
        <p> by {comment.user_id} </p>
      </div>

    </NavLink>
  );
};

export default CommentCard;
