import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { TagContext } from './TagProvider'

export const CreateTag= () => {
    const {addTag, updateTag, getTagById, tagById} = useContext(TagContext)
    const history = useHistory()
    const {tagId} = useParams()

    useEffect(() =>{
        getTagById(tagId)
    },[])
    
    const [tag, setTag] = useState ({
        label: ""
    })

    
    const handleChange = (event) => {
        const newTag = {...tag}
        newTag[event.target.id] = event.target.value
        setTag(newTag)
    }

    

    const saveTag = () => {
        if(tag.label === ""){
            window.alert("Please fill all input fields!")
        }
        else {
            if(tagId){
                updateTag({
                    id: tagId,
                    label: tag.label
                })
                .then(() => history.push("/tags"))
            }
            else {
                 addTag(tag)
                 .then(() => history.push("/tags"))
            }   
        }  
    }

    console.log(tagById)

    return (
        <>
            <h2>{tagId ? "Edit Tag": "Create a New Tag"  }</h2>
            <form className="tag_form">
                <label htmlFor="label">Tag Name: </label>
                <input type="text" id="label" defaultValue={tagById.label} onChange={handleChange} ></input>
                <button className="save_tag" onClick={event => {
                    event.preventDefault()
                    saveTag()
                }}>{tagId ? "Save Tag" : "Add Tag"}</button>

            </form>
        </>
    )

}