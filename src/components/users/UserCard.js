import React from 'react'
import { useHistory } from 'react-router'
import './UserCard.css'

export const UserCard = ({ user }) => {
    const history = useHistory()



    return (
        <article className="userCard">
            <h2 className="userNameLink" onClick={() => history.push(`/users/${user.id}`)}>{user.userName}</h2>
            <h3>{user.firstName} {user.lastName}</h3>
            <p>Everyone is an admin!</p>
        </article>
    )
}