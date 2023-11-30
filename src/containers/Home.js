import React, { useState } from 'react'
import {v4} from 'uuid'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('')

    const  createNewRoom = event => {
        event.preventDefault()
        const id = v4()
        setRoomId(id);
        toast.success('Created a new room')
    }

    const joinRoom = () => {
        if(!roomId || !username) {
            toast.error('Room ID and Username is required')
            return
        }
        // Redirect
        navigate(`/editor/${roomId}`, {
            state: { username }
        })
    }

    const handleInputEnter = event => {
        if (event.code === 'Enter') {
            joinRoom()
        }
    }

    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img
                    className="homePageLogo"
                    src="/CoCode.png"
                    alt="CoCode-logo"
                />
                <h4 className="mainLabel">Paste invitation ROOM ID</h4>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="ROOM ID"
                        onChange={(event) => setRoomId(event.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="USERNAME"
                        onChange={(event) => setUsername(event.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}
                    />
                    <button className="btn joinBtn" onClick={joinRoom}>
                        Join
                    </button>
                    <span className="createInfo">
                        If you don't have an invite then create &nbsp;
                        <a
                            onClick={createNewRoom}
                            href=""
                            className="createNewBtn"
                        >
                            new room
                        </a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>
                    Developed by <a href="">Faizan Munir</a>, <a href="">Muneeb Sultan</a>, and <a href="">Hassan Mahmood</a>
                </h4>
            </footer>
        </div>
  )
}

export default Home