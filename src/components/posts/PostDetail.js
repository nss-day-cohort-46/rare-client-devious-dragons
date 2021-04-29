import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { PostTags } from '../tags/PostTags';
import { PostContext } from './PostProvider'
import { Link } from 'react-router-dom'

export const PostDetail = () => {
    const { getPostById } = useContext(PostContext);
    const [postDetail, setPostDetail] = useState({})
    const userId = parseInt(localStorage.getItem(`rare_user_id`))
    const {postId} = useParams();
    const history = useHistory();

    useEffect(() => {
        getPostById(postId)
        .then((res) => {
            setPostDetail(res)
        })
    }, [postId])


    return (
    <>
        <article className="post_detail">
            <h1 className="title">{postDetail.title}</h1>
            <Link to={`/posts/detail/edit/${postDetail.id}`}>EDIT</Link>
            <h2 className="author">By: {postDetail.userId}</h2>
            <h2 className= "date">{postDetail.publicationDate}</h2>
            <img src={postDetail.imageUrl} alt="article_image" width="25%" />
            <section className="content">{postDetail.content}</section>
        </article>
        
        <div className="manage_tags">
            { userId === postDetail.userId ?
                <section>
                    <div>Tags: {postDetail.postTags.map(tags => tags.tag.label).join(", ")}</div>
                <button className="post_tags" onClick={() => history.push(`/posts/detail/${postId}/tags`)}>Manage Tags</button></section>
            : <></>}  
        </div>

        <div>
            <button className="reaction_btn" onClick={()=> history.push(`/posts/details/${postId}/reactions`)}>Add your reaction</button>
        </div>
    
    </>
)

}