import React from "react"
import { Route } from "react-router-dom"
import { PostList } from "./posts/PostList"
import { PostProvider } from "./posts/PostProvider"

import { PostDetail } from './posts/PostDetail'

import { CategoryProvider } from "./categories/CategoryProvider"
import { CategoryList } from "./categories/CategoryList"
import { CategoryForm } from "./categories/CategoryForm"
import { PostForm } from "./posts/PostForm"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <PostProvider>
                <CategoryProvider>

                    <Route exact path="/posts/detail/:postId(\d+)">
                        <PostDetail />
                    </Route>

                    <Route exact path="/posts/create">
                        <PostForm />
                    </Route>

                    <Route path="/myposts">
                        <PostList />
                    </Route>

                    <Route exact path="/posts">
                        <PostList />
                    </Route>

                    <Route exact path="/categories">
                        <CategoryList />
                    </Route>

                    <Route path="/categories/create">
                        <CategoryForm />
                    </Route>


                </CategoryProvider>
            </PostProvider>
        </main>
    </>
}
