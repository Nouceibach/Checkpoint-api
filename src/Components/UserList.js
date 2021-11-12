import axios from 'axios'
import React, { useEffect, useState } from 'react'
//import './UserList.css'
import UserCard from './UserCard'

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const url ='https://jsonplaceholder.typicode.com/users'
        axios.get(url)
        .then(response => response.data)
        .then(resData => setUsers(resData))
    }, [])

    return (
        <div class='user-disposition' >
            <h1>Welcome, this is the List of Users</h1>
            <div>
                {users.map( user => <UserCard user={user} key={user.id}/> )}
            </div>
        </div>
    )
}

export default UserList
