import React, { useEffect, useState } from 'react'
import './App.css'
import { useAppSelector } from '../app/hooks'
import { selectUserList } from '../models/user'


function DisplayUser() {
    const users = useAppSelector(selectUserList)
    console.log(users)

    return (
        <div>
            <h3>last user</h3>
            <p>{users.map(u => u.name)[users.length-1]}</p>
        </div>
    );
}

export default DisplayUser