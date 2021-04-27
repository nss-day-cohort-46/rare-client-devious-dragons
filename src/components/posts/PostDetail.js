import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { PostContext } from './PostProvider'

export const PostDetail = () => {
    const { getPostById } = useContext(PostContext);
    const [postDetail, setPostDetail] = useState({})
    const {postId} = useParams();
    const history = useHistory();

    useEffect(() => {
        getPostById(postId)
        .then((res) => {
            setPostDetail(res)
        })
    }, [])
    return (
    <>
        <article className="post_detail">
            <h1 className="title">{postDetail.title}</h1>
            <h2 className="author">By: {postDetail.userId}</h2>
            <h2 className= "date">{postDetail.publicationDate}</h2>
            <img src={postDetail.imageUrl} alt="article_image" />
            <section className="content">{postDetail.content}</section>
        </article>
    
    </>
)

}