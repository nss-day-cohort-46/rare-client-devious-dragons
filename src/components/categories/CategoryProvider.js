import React, { createContext, useState } from 'react'

export const CategoryContext = createContext()

export const CategoryProvider = props => {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        return fetch(`http://localhost:8088/categories`)
            .then(res => res.json())
            .then(setCategories)
    }

    const addCategory = (newCategory) => {
        return fetch(`http://localhost:8088/categories`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCategory)
        })
    }

    return (
        <CategoryContext.Provider value={{
            categories, getCategories, addCategory
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
}

