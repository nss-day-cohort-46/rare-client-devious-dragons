import React from 'react'  
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import './PostCard.css'

export const PostCard = ({ post, category }) => {
    // const history = useHistory()

    return (
        <article className="post">
            <Link to={`/posts/detail/${post.id}`}>
            <h4>{post.title}</h4>
            </Link>
            <p>{post.publicationDate}</p>
            <p>Category: {category.label}</p>
            {/* <button onClick={() => history.push(`/posts/${post.id}`)}>Post Details</button> */}
        </article>
    )
}