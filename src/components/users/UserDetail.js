import React from 'react'
import { useParams } from 'react-router'

export const UserDetail = () => {
    const { userId } = useParams()
    return (
        <h1>Oh hi there. This is a user detail page for user {userId}</h1>
    )
}