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
        // Using the array.sort method to put these in alphabetical order
        // if interested in how this works, check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        setSortedUsers(
            users.sort( (a,b) => {
                if (a.userName.toUpperCase() < b.userName.toUpperCase()) return -1
                else if (a.userName.toUpperCase() > b.userName.toUpperCase()) return 1
                return 0
            })
        )
    }, [users])

    return (
        <section className="users">
            <h1> Look at <a href="https://www.youtube.com/watch?v=NsLKQTh-Bqo">allllll those</a> Users</h1>
            {
                sortedUsers.map(user => {
                    return <UserCard key={user.id} user={user} />
                })
            }
        </section>
    )
    

}