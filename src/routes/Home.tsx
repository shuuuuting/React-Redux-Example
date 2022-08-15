import React, { useState, useEffect } from 'react'
import { selectMessage, saveMessage } from '../models/message'
import { selectUserList, userAsync } from '../models/user'
import './App.css'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import AddUser from './AddUser'
import DisplayUser from './DisplayUser'

function Home() {
    const dispatch = useAppDispatch()
    const msg = useAppSelector(selectMessage)
    const [message, setMessage] = useState<string>('')

    useEffect(() => {
        dispatch(userAsync())
    }, [])

    return (
        <div className="App">
            {console.log('Rendering')}
            <header className="App-header">
                <div className="content content-msg">
                    <div>
                        <h3>local State</h3>
                        <input
                            value={message}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setMessage(e.target.value) }} />
                        <p>
                            {message}
                        </p>
                    </div>
                    <div>
                        <h3>store State</h3>
                        <input 
                            value={msg}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { dispatch(saveMessage(e.target.value)) }} />
                        <p>
                            {msg}
                        </p>
                    </div>
                </div> 
                <br />
                <div className="content content-user">
                    <AddUser />
                    <DisplayUser />
                </div>
            </header>
        </div>
    );
}

export default Home
