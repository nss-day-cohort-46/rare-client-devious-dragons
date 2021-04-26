import React from "react"
import { Route } from "react-router-dom"
import { PostList } from "./posts/PostList"
import { PostProvider } from "./posts/PostProvider"
import { CategoryProvider } from "./categories/CategoryProvider"
import { CategoryList } from "./categories/CategoryList"
import { CategoryForm } from "./categories/CategoryForm"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <PostProvider>
                <CategoryProvider>

                    <Route path="/myposts">
                        <PostList />
                    </Route>

                    <Route path="/posts">
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
