import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { UserContext } from './UserProvider'

export const UserDetail = () => {
    const { userId } = useParams()
    const [selectedUser, setSelectedUser] = useState({})
    const { getUserById } = useContext(UserContext)

    useEffect(() => {
        getUserById(userId).then(setSelectedUser)
    }, [])

    return (
        <h1>Oh hi there. This is a user detail page for user {selectedUser.userName}</h1>
    )
}