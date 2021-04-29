import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { CategoryContext } from '../categories/CategoryProvider'
import { UserContext } from '../users/UserProvider'
import { PostCard } from './PostCard'
import { PostContext } from './PostProvider'


export const PostList = props => {

    const { posts, getPosts, searchTerms } = useContext(PostContext)
    const [userPosts, setUserPosts] = useState([])
    const [categoryIdValue, setCategoryIdValue ] = useState(0)
    const [userIdValue, setUserIdValue ] = useState(0)
    const userId = parseInt(localStorage.getItem(`rare_user_id`))
    const history = useHistory()
    const [ filteredPosts, setFiltered ] = useState([])

    //=========================to be replaced with category fetch======================//
    const { categories, getCategories } = useContext(CategoryContext)
    const { users, getAllUsers } = useContext(UserContext)
    //=================================================================================//

    useEffect(() => {
        getCategories()
        .then(getAllUsers())
        .then(getPosts())
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = posts.filter(post => post.title.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            // If the search field is blank, display all animals
            setFiltered(posts)
        }
        }, [searchTerms, posts])

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
        let sortVarId = event.target.id
        // console.log(sortVarId);

        if (sortVarId==="userId"){

            //reset cat dropdown, set user dropdown to selected value
            setCategoryIdValue(0)
            setUserIdValue(sortVar)
            
            if (sortVar===0) {
                // console.log("Not sorted");
                setUserPosts(sortedPostsCat)
            }else{
                // console.log("Sorted");
                const thisUsersPosts = sortedPostsCat.filter(post => post.userId === sortVar)
                setUserPosts(thisUsersPosts)
            }
        }
        
        if (sortVarId==="categoryId"){
            
            //reset user dropdown, set cat dropdown to selected value
            setUserIdValue(0)
            setCategoryIdValue(sortVar)

            if (sortVar===0) {
                // console.log("Not sorted");
                setUserPosts(sortedPostsCat)
            }else{
                // console.log("Sorted");
                const thisUsersPosts = sortedPostsCat.filter(post => post.categoryId === sortVar)
                setUserPosts(thisUsersPosts)
            }
        }
    }

    return (
        <section className="posts">
            <h2>My Posts</h2>

            <fieldset>
            <div className="form-group">
            {/* <label htmlFor="categoryId">Category: </label> */}
            <select value={userIdValue} id="userId" className="form-control" 
            onChange={handleControlledInputChange}>
                <option value="0">All Users</option>
                {users.map(l => (
                <option key={l.id} value={l.id}>
                    {l.firstName} {l.lastName}
                </option>
                ))}
            </select>
            </div>
        </fieldset>

        <div>OR</div>

            <fieldset>
            <div className="form-group">
            {/* <label htmlFor="categoryId">Category: </label> */}
            <select value={categoryIdValue} id="categoryId" className="form-control" 
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
                                        category={categories.find(cat => cat.id === post.categoryId)}
                                        user={users.find(user => user.id === post.userId)}
                                        />)
            }

        </section>
    )


}