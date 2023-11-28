import React from 'react'
import Avatar from 'react-avatar'

const Client = props => {
    // console.log(props)
    return (
        <div className="client">
            <Avatar name={props.username} size={50} round="14px" />
            <span className="userName">{props.username}</span>
        </div>
    )
}

export default Client