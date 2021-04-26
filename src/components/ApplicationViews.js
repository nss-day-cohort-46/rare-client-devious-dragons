import React from "react"
import { Route } from "react-router-dom"
import { PostList } from "./posts/PostList"
import { PostProvider } from "./posts/PostProvider"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <PostProvider>
                <Route path="/myposts">
                    <PostList />
                </Route>
                <Route path="/posts">
                    <PostList />
                </Route>
            </PostProvider>
        </main>
    </>
}
