import React from 'react'
import './UserCard.css'

export const UserCard = ({ user }) => {

    return (
        <article className="userCard">
            <h2>{user.userName}</h2>
            <h3>{user.firstName} {user.lastName}</h3>
            <p>Everyone is an admin!</p>
        </article>
    )
}