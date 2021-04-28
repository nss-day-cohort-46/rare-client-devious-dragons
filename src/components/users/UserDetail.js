import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { UserContext } from './UserProvider'
import emptyAvatar from '../../images/emptyAvatar.png'
import './UserDetail.css'

export const UserDetail = () => {
    const { userId } = useParams()
    const [selectedUser, setSelectedUser] = useState({})
    const { getUserById } = useContext(UserContext)

    useEffect(() => {
        getUserById(userId).then(setSelectedUser)
    }, [])

    return (
        <section className="userDetail">
            <h1 className="userDetail--h1">{selectedUser.userName}</h1>
            <div className="userDetail__details">
                <img className="avatar" src={emptyAvatar}></img>
                <div className="userDetail__details--right">
                    <p>{selectedUser.firstName} {selectedUser.lastName}</p>
                    <p>{selectedUser.email}</p>
                    <p>joined on {selectedUser.createdOn}</p>

                </div>
            </div>
            <p className="userDetail--userType">{selectedUser.isStaff ? "admin" : "regular user"}</p>
        </section>
    )
}