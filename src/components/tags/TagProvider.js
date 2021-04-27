import React, { createContext, useState } from 'react'

export const TagContext = createContext()

export const TagProvider = props => {
    const [tags, setTags] = useState([])
    
    const getTags = () => {
        return fetch(`http://localhost:8088/tags`)
            .then(res => res.json())
            .then(setTags)
    }

    const addTag = tagObj => {
        return fetch("http://localhost:8088/tags", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tagObj)
        })
        .then(getTags)
    }


    const getPostTags = () => {
        return fetch(`http://localhost:8088/PostTags`)
            .then(res => res.json())
            
    }

    return (
        <TagContext.Provider value={{
            tags, getTags, getPostTags, addTag
        }}>
            {props.children}
        </TagContext.Provider>
    )
}