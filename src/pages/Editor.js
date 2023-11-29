import React, { useState } from 'react'
import Client from '../components/Client'
import MainContent from '../components/MainContent'

const Editor = () => {
    const [clients, setClients] = useState([
        {socketId: 1, username: 'Faizan M'},
        {socketId: 2, username: 'Muneeb S'},
        {socketId: 3, username: 'Hassan M'},
    ])

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