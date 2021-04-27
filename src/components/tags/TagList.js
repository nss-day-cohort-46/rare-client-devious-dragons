import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { TagContext } from './TagProvider'

export const TagList= () => {
    const {tags, getTags} = useContext(TagContext)
    // const [tag, setTag] = useState([])

    useEffect(() => {
        getTags()      
    }, [])

    console.log(tags)
    return (
        <>
            <h2 className="tag_title">Tags</h2>
            <div>
                <h3>Created Tags</h3>
                <div className="tag_list">{tags.map(t => t.label)}</div>
            </div>
        </>
    )
}