import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineCloseSquare } from "react-icons/ai";
import "../Movies/CommentCard.css";

const CommentCard = ({ comment }) => {
  const { id } = comment;

  return (
    <NavLink to={`/comments/${id}`}>
      <div className="comment-card">
        <div className="card-top">
          <p className="card__exit">
            {" "}
            <AiOutlineCloseSquare size={15} />
          </p>
        </div>
        <p className="comment">{comment.content}</p>
      </div>
    </NavLink>
  );
};

export default CommentCard;
