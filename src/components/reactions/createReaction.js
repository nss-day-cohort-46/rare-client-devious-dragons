import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { ReactionContext } from './ReactionProvider'

export const CreateReaction =() => {
    const {addReaction} = useContext(ReactionContext)
    const {postId} = useParams()

    const history = useHistory()

    const [reaction, setReaction] = useState ({
        label: "",
        imageUrl: ""
    })

    
    
    const handleChange = (event) => {
        const newReaction = {...reaction}
        newReaction[event.target.id] = event.target.value
        setReaction(newReaction)
    }

    

    const saveReaction = () => {
        addReaction(reaction)
            .then(()=>history.push(`/posts/details/${postId}`))
    }

    // console.log(tagById)

    return (
        <>
            <h2>Create a Reaction</h2>
            <form className="tag_form">
                <label htmlFor="label">Reaction Label: </label>
                <input type="text" id="label"  onChange={handleChange} ></input>
                <label htmlFor="imageUrl">Image Url: </label>
                <input type="text" id="imageUrl"  onChange={handleChange} ></input>
                <button className="save_reaction" onClick={event => {
                    event.preventDefault()
                    saveReaction()
                }}>Save Reaction</button>

            </form>
        </>
    )
}
