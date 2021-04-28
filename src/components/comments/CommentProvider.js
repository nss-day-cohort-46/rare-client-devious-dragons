import React, { useState, createContext } from "react"

export const CommentContext = createContext()

// This component establishes what data can be used.
export const CommentProvider = (props) => {
    const [comments, setComments] = useState([])
    

    const getComments = () => {
        return fetch("http://localhost:8088/comments")
        .then(res => res.json())
        .then(setComments)
    }

    const addComment = commentObj => {
        return fetch("http://localhost:8088/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentObj)
        })
        .then(getComments)
    }
    const getCommentById = (id) => {
        return fetch(`http://localhost:8088/comments/${id}`)
            .then(res => res.json())
    }

    const deleteComment = commentId => {
        return fetch(`http://localhost:8088/Comments/${commentId}`, {
            method: "DELETE"
        })
            .then(getComments)
    }

    const updateComment = comment => {
        return fetch(`http://localhost:8088/comments/${comment.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(comment)
        })
          .then(getComments)
      }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <CommentContext.Provider value={{
            comments, getComments, addComment, getCommentById, updateComment, deleteComment
        }}>
            {props.children}
        </CommentContext.Provider>
    )
}