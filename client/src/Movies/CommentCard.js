import React from 'react';
import {NavLink} from 'react-router-dom';
import { AiOutlineCloseSquare } from "react-icons/ai";
import '../Movies/CommentCard.css';


const CommentCard = ({ comment }) => {


  const {id} = comment


  return (


    <div className='comment-card'>
        <div className='card-top'>
        <p className="card__exit"> <AiOutlineCloseSquare size={15} /></p>
        </div>
        <NavLink to={`/comments/${id}`}><p className="comment">{comment.content}</p></NavLink>
    </div>
  )
}

export default CommentCard