import React, { useContext, useEffect, useState } from "react"
import { CommentContext } from './CommentProvider'
import { useHistory, useParams } from 'react-router-dom'

export const CommentForm = () => {
    const { addComment, getComments, getCommentById, updateComment, comments } = useContext(CommentContext)
    const { postId } = useParams();
    const history = useHistory();
    const user = localStorage.getItem('rare_user_id')
    const [comment, setComment] = useState({
        postId: parseInt(postId),
        authorId: parseInt(user),
        content: ""
    });
    // const [isLoading, setIsLoading] = useState(true);

    

    const handleControlledInputChange = (event) => {
        const newComment = { ...comment}
        newComment[event.target.id] = event.target.value
        // update state
        setComment(newComment)
        
      }

    const handleSaveComment = () => {

        addComment({
            postId: parseInt(postId),
            authorId: parseInt(user),
            content: comment.content
            })
            .then(() => history.push(`/posts/detail/${postId}`))
          
        }
        

    return(
        <form className="commentForm">
            <h2 className="commentForm__title">Add Comment</h2>
            <fieldset>
              <div className="form-group">
                  <label htmlFor="content">Comment</label>
                  <input type="text" id="content" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder=""  value={comment.content}/>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            // disabled={isLoading}
            onClick={event => {  
              event.preventDefault()
              handleSaveComment()
            }}>
            Add Comment
          </button>
        </form>
    )

}