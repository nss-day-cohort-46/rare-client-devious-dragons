import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { TagContext } from './TagProvider'

export const PostTags = () => {
    const {tags, getTags} = useContext(TagContext)
   

    useEffect(() => {
        getTags()      
    }, [])

    const {postId} = useParams()
    
    const [postTags, setPostTags] = useState ([
    ])
    
    //handles tag checkbox event change and stores each check to state as an array
    const handleTagChange = (event) => {
        if (event.target.name.includes('tag')) {
            const newTag = [...postTags]
            if (event.target.checked) {
                newTag.push(
                    {postId: parseInt(postId),
                    tagId: newTag[event.target.id] = parseInt(event.target.value) 
                })
            } 
            //remove object from array if unchecked
            else {
                const index = newTag.indexOf(parseInt(event.target.value))
                newTag.splice(index, 1)
            }
            setPostTags(newTag)      
        }
        
    }

    const saveTagPost =()=> {
        
    }



    console.log(postTags)
    return (
        <>
            <h2>Choose from the following tags</h2>
            <section className="tag_select">
                <div>{tags.map(t =><div><input type="checkbox" name ={`tag`} id="tagId" onChange={handleTagChange} value={t.id}></input><label htmlFor="tagId">{t.label}</label></div>)}</div>
                <button className="save_postTag" onClick ={saveTagPost}></button>
            </section>
        </>
    )
}