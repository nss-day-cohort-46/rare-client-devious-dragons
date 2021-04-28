import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { TagContext } from './TagProvider'

export const CreateTag= () => {
    const {addTag, getTagById, updatedTag,} = useContext(TagContext)
   
    const [tag, setTag] = useState ({
        label: ""
    })

    const handleChange = (event) => {
        const newTag = {...tag}
        newTag[event.target.id] = event.target.value
        setTag(newTag)
    }

    const history = useHistory()

    const saveTag = () => {
        addTag(tag)
        .then(() => history.push("/tags"))
    }

    return (
        <>
            <h2>Create a New Tag</h2>
            <form className="tag_form">
                <label htmlFor="label">Tag Name: </label>
                <input type="text" id="label" onChange={handleChange}></input>
                <button className="save_tag" onClick={event => {
                    event.preventDefault()
                    saveTag()
                }}>Add Tag</button>

            </form>
        </>
    )

}