import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { CategoryContext } from './CategoryProvider'
import "./CategoryList.css"

export const CategoryList = props => {
    const {categories, getCategories, deleteCategory } = useContext(CategoryContext)
    const [modalOpen, setModalIsOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("")
    const history = useHistory()
    

    useEffect(() => {
        getCategories()
    }, [])

    const handleAdd = e => {
        history.push("/categories/create")
    }

    const confirmDelete = e => {
        const id = parseInt(e.target.id.split("--")[1])
        setSelectedCategory(categories.find(cat => cat.id === id))
        setModalIsOpen(true)
        
    }

    const handleDelete = e => {
        const id = selectedCategory.id
        deleteCategory(id)
        setModalIsOpen(false)
    }

    return (
        <section className="categories">
            <h2>Categories</h2>
            <button onClick={handleAdd}>Add A New Category</button>
            {
                categories.map(cat => {
                    return (
                        <section className="category" key={cat.id}>
                            <h3>{cat.label}</h3>
                            <button className="deleteButton" id={"category--" + cat.id} onClick={confirmDelete}>X</button>
                        </section>
                    )
                })
            }
            <dialog open={modalOpen}>Are you sure you want to delete {selectedCategory.label}?
                <button className="confirmDeleteButton" onClick={handleDelete}>Yes</button>
                <button className="closeModalButton" onClick={() => setModalIsOpen(false)}>X</button>
            </dialog>
        </section>
    )
}