import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { PostCard } from './PostCard'
import { PostContext } from './PostProvider'

export const PostList = props => {
    const { posts, getPosts } = useContext(PostContext)
    const [userPosts, setUserPosts] = useState([])
    const userId = parseInt(localStorage.getItem(`rare_user_id`))
    const history = useHistory()

    //=========================to be replaced with category fetch======================//
    const categories = [
        {
            id: 1,
            label: 'News'
        }
    ]
    //=================================================================================//

    useEffect(() => {
        getPosts()
    }, [])

    useEffect(() => {
        const sortedPosts = posts.sort((a,b) => new Date(b.publicationDate) - new Date(a.publicationDate))
        if (history.location.pathname.includes("/my")) {
            const thisUsersPosts = sortedPosts.filter(post => post.userId === userId)
            setUserPosts(thisUsersPosts)
        } else {
            setUserPosts(sortedPosts)
        }
    }, [posts])

    return (
        <section className="posts">
            <h2>My Posts</h2>
            {
                userPosts.map(post => <PostCard 
                                        key={post.id}
                                        post={post}
                                        category={categories.find(cat => cat.id === post.categoryId)} />)
            }

        </section>
    )


}