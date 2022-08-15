import React, { useState } from 'react'
import './App.css'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { saveMessage } from '../models/message'
import { saveSingleUser } from '../models/user'


function AddUser() {
    const dispatch = useAppDispatch()
    const [name, setName] = useState<string>('Redux')

    const handleChange = (inputName: string) => {
        setName(inputName)
        dispatch(saveSingleUser({name: inputName}))
    }

    return (
        <div>
            <h3>add user name</h3>
            <input
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)} />
            {/* <p>{name}</p> */}
        </div>
    );
}

export default AddUser
