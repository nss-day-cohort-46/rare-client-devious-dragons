import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { TagContext } from './TagProvider'

export const PostTags = () => {
    const {tags, getTags} = useContext(TagContext)

    useEffect(() => {
        getTags()      
    }, [])

    const {postId} = useParams()
    
    const [postTags, setPostTags] = useState ({
        postId: parseInt(postId),
        tagId: 0
    })
    
    const tagArray = []
    
    const handleTagChange = (event) => {
        const newTag = {...postTags}
        newTag[event.target.id] = event.target.value
        tagArray.push(newTag.tagId)
        setPostTags(newTag)
    }
    console.log(tagArray)
    return (
        <>
            <h2>Choose from the following tags</h2>
            <section className="tag_select">
                <div>{tags.map(t => <div><input type="checkbox" id="tagId" onChange={handleTagChange} value={t.id}></input><label htmlFor="tagId">{t.label}</label></div>)}</div>

            </section>
        </>
    )
}