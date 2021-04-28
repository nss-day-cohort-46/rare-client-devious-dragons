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
        return fetch(`http://localhost:8088/postTags`)
            .then(res => res.json())
            
    }
    
    const addPostTags = (tagObj) => {
        return fetch(`http://localhost:8088/postTags`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tagObj)
        })
        .then(getPostTags)
                
    }

    return (
        <TagContext.Provider value={{
            tags, getTags, getPostTags, addTag, addPostTags
        }}>
            {props.children}
        </TagContext.Provider>
    )
}