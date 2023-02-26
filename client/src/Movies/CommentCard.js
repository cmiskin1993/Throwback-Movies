import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../Movies/CommentCard.css";

const CommentCard = ({ comment, movie }) => {
  const currentUser = useSelector((state) => state.sessions.currentUser);
  const { id } = comment;

  // console.log("comment name", comment.user.name);

  return (
    <div>
      <div className="comment-card">
        <div className="card-top">
          {comment.user_id === currentUser.id ? (
            <NavLink to={`/movies/${movie.id}/comments/${id}`}>
              <h4 className="edit-link">edit</h4>
            </NavLink>
          ) : null}
        </div>
        <p className="comment">{comment.content}</p>
        <p className="m-0 text-start p-1"> by {comment.user.name} </p>
      </div>
    </div>
  );
};

export default CommentCard;
