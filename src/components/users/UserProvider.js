import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = props => {
    const [users, setUsers] = useState([])

    const getAllUsers = () => {
        return fetch(`http://localhost:8088/users`)
            .then(res => res.json())
            .then(setUsers)
    }

    return (
        <UserContext.Provider value={{
            users, getAllUsers
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

