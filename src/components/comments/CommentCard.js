import React from 'react'  
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

export const CommentCard = ({ comment }) => {
    return(
        <section className="comment">
            <p>{comment.content}</p>
            <p>- {comment.username}</p>
        </section>
    )
}