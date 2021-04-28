import React from "react"
import { Route } from "react-router-dom"
import { PostList } from "./posts/PostList"
import { PostProvider } from "./posts/PostProvider"

import { PostDetail } from './posts/PostDetail'

import { CategoryProvider } from "./categories/CategoryProvider"
import { CategoryList } from "./categories/CategoryList"
import { CategoryForm } from "./categories/CategoryForm"
import { PostForm } from "./posts/PostForm"

import { CommentForm } from './comments/CommentForm'
import { CommentProvider } from './comments/CommentProvider'


import { TagList } from "./tags/TagList"
import { TagProvider } from "./tags/TagProvider"
import { CreateTag } from "./tags/CreateTag"
import { UserProvider } from "./users/UserProvider"
import { UserList } from "./users/UserList"
import { UserDetail } from "./users/UserDetail"
import { PostTags } from "./tags/PostTags"




export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <PostProvider>
                <CategoryProvider>
                    <CommentProvider>
                        <UserProvider>

                            <Route exact path="/posts/detail/:postId(\d+)">
                                <PostDetail />
                                <CommentForm />
                            </Route>

                            <Route exact path="/posts/create">
                                <PostForm />
                            </Route>

                            <Route exact path="/myposts">
                                <PostList />
                            </Route>

                            <Route exact path="/posts">
                                <PostList />
                            </Route>

                            <TagProvider>
                                <Route exact path="/posts/detail/:postId(\d+)/tags">
                                    <PostTags />
                                </Route>
                            </TagProvider>


                            <Route exact path="/categories">
                                <CategoryList />
                            </Route>

                            <Route path="/categories/create">
                                <CategoryForm />
                            </Route>

                            <TagProvider>
                                <Route exact path="/tags">
                                    <TagList />
                                </Route>
                                <Route path="/tags/create">
                                    <CreateTag />
                                </Route>
                            </TagProvider>


                            <Route exact path="/users">
                                <UserList />
                            </Route>

                            <Route exact path="/users/:userId(\d+)">
                                <UserDetail />
                            </Route>

                        </UserProvider>
                    </CommentProvider>
                </CategoryProvider>
            </PostProvider>
        </main>
    </>
}
