import React, { useContext, useEffect, useState } from 'react'
import { UserCard } from './UserCard'
import { UserContext } from './UserProvider'

export const UserList = () => {
    const { users, getAllUsers } = useContext(UserContext)
    const [sortedUsers, setSortedUsers] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])

    useEffect(() => {
        

    }, [users])

    return (
        <section className="users">
            <h1> Look at <a href="https://www.youtube.com/watch?v=NsLKQTh-Bqo">allllll those</a> Users</h1>
            {
                users.map(user => {
                    return <UserCard key={user.id} user={user} />
                })
            }
        </section>
    )
    

}