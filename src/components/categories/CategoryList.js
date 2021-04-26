import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { CategoryContext } from './CategoryProvider'

export const CategoryList = props => {
    const {categories, getCategories} = useContext(CategoryContext)
    const history = useHistory()

    useEffect(() => {
        getCategories()
    }, [])

    const handleAdd = (e) => {
        history.push("/categories/create")
    }

    return (
        <section className="categories">
            <h2>Categories</h2>
            <button onClick={handleAdd}>Add A New Category</button>
            {
                categories.map(cat => {
                    return (
                        <h3>{cat.label}</h3>
                    )
                })
            }
        </section>
    )
}