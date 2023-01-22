import React from 'react'
import '../Movies/CommentsCard.css'
import { AiOutlineCloseSquare } from "react-icons/ai";


const CommentsCard = ({ comment }) => {


  return (


    <div className='comment-card'>
        <div className='card-top'>
        <p class="card__exit"> <AiOutlineCloseSquare size={15} /></p>
        </div>
        <p class="comment">{comment.content}</p>
    </div>
  )
}

export default CommentsCard