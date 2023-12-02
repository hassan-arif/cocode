import React, { useEffect, useRef, useState } from 'react'
import { initSocket } from '../socket'
import { Navigate, useLocation, useParams, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Client from '../components/Client'
import MainContent from '../components/MainContent'
import ACTIONS from '../Actions'

const Editor = () => {
    const socketRef = useRef(null) // prevents component rerendering
    const location = useLocation()
    const { roomId } = useParams()
    const reactNavigator = useNavigate()
    const [clients, setClients] = useState([])

    useEffect(() => {
        const init = async () => {
            socketRef.current = await initSocket()
            socketRef.current.on('connect_error', err => handleErrors(err))
            socketRef.current.on('connect_failed', err => handleErrors(err))
            
            function handleErrors(e) {
                console.log('socket error', e)
                toast.error('Socket connection failed, try again later.')
                reactNavigator('/')
            }

            socketRef.current.emit(ACTIONS.JOIN, {
                roomId,
                username: location.state?.username
            })

            // Listening for joined event
            socketRef.current.on(ACTIONS.JOINED,
                ({clients, username, socketId}) => {
                    if(username !== location.state?.username) {
                        toast.success(`${username} joined the room.`)
                        console.log(`${username} joined`)
                    }
                    setClients(clients)
                }
            )
        }
        init()
    }, [])

    if(!location.state)
        return <Navigate to='/'/>

    return (
        <div className="mainWrap">
            <div className="aside">
                <div className="asideInner">
                    <div className="logo">
                        <img
                            className="logoImage"
                            src="/CoCode.png"
                            alt="logo"
                        />
                    </div>
                    <h3>Connected</h3>
                    <div className="clientsList">
                        {clients.map((client) => (
                            <Client
                                key={client.socketId}
                                username={client.username}
                            />
                        ))}
                    </div>
                </div>
                <button className="btn copyBtn">
                    Copy ROOM ID
                </button>
                <button className="btn leaveBtn">
                    Leave
                </button>
            </div>
            <div className="editorWrap">
                <MainContent/>
            </div>
        </div>
    )
}

export default Editor