import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { CategoryContext } from '../categories/CategoryProvider'
import { PostCard } from './PostCard'
import { PostContext } from './PostProvider'


export const PostList = props => {
    const { posts, getPosts } = useContext(PostContext)
    const [userPosts, setUserPosts] = useState([])
    const userId = parseInt(localStorage.getItem(`rare_user_id`))
    const history = useHistory()

    //=========================to be replaced with category fetch======================//
    const { categories, getCategories } = useContext(CategoryContext)
    //=================================================================================//

    useEffect(() => {
        getCategories()
        .then(getPosts())
    }, [])

    useEffect(() => {
        // sort posts by date
        const sortedPosts = posts.sort((a,b) => new Date(b.publicationDate) - new Date(a.publicationDate))
        
        // check and see if this is "my posts" or just all posts
        if (history.location.pathname.includes("/my")) {
            const thisUsersPosts = sortedPosts.filter(post => post.userId === userId)
            setUserPosts(thisUsersPosts)
        } else {
            setUserPosts(sortedPosts)
        }
    }, [posts])

    const handleControlledInputChange = (event) => {
        const sortedPostsCat = posts.sort((a,b) => new Date(b.publicationDate) - new Date(a.publicationDate))
        let sortVar = parseInt(event.target.value)
        // console.log(sortVar);
        
        if (sortVar===0) {
            // console.log("Not sorted");
            setUserPosts(sortedPostsCat)
        }else{
            // console.log("Sorted");
            const thisUsersPosts = sortedPostsCat.filter(post => post.categoryId === sortVar)
            setUserPosts(thisUsersPosts)
        }
    }

    return (
        <section className="posts">
            <h2>My Posts</h2>

            <fieldset>
            <div className="form-group">
            {/* <label htmlFor="categoryId">Category: </label> */}
            <select value={posts.categoryId} id="categoryId" className="form-control" 
            onChange={handleControlledInputChange}>
                <option value="0">All Categories</option>
                {categories.map(l => (
                <option key={l.id} value={l.id}>
                    {l.label}
                </option>
                ))}
            </select>
            </div>
        </fieldset>


            {
                userPosts.map(post => <PostCard 
                                        key={post.id}
                                        post={post}
                                        category={categories.find(cat => cat.id === post.categoryId)} />)
            }

        </section>
    )


}