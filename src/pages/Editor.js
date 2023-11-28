import React, { useState } from 'react'
import Client from '../components/Client'
import MainContent from '../components/MainContent'

const Editor = () => {
    const [clients, setClients] = useState([
        {socketId: 1, username: 'Faizan M'},
        {socketId: 2, username: 'Muneeb S'},
        {socketId: 3, username: 'Hassan M'},
    ])

    const copyRoomId = () => {

    }

    const leaveRoom = () => {

    }

    return (
        <div className="mainWrap">
            <div className="aside">
                <div className="asideInner">
                    <div className="logo">
                        <img
                            className="logoImage"
                            src="/code-sync.png"
                            alt="logo"
                        />
                    </div>
                    <br/>
                    <h3>Connected</h3>
                    <br/>
                    <div className="clientsList">
                        {clients.map((client) => (
                            <Client
                                key={client.socketId}
                                username={client.username}
                            />
                        ))}
                    </div>
                </div>
                <button className="btn copyBtn" onClick={copyRoomId}>
                    Copy ROOM ID
                </button>
                <button className="btn leaveBtn" onClick={leaveRoom}>
                    Leave
                </button>
            </div>
            <div className="editorWrap">
                <MainContent
                    // socketRef={socketRef}
                    // roomId={roomId}
                    // onCodeChange={(code) => {
                    //     codeRef.current = code;
                    // }}
                />
            </div>
        </div>
    )
}

export default Editor