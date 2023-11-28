import React, { useEffect } from 'react'
import Codemirror from 'codemirror'
import 'codemirror/mode/javascript/javascript'

const MainContent = () => {
    useEffect(() => {
        async function init() {
            Codemirror.fromTextArea(document.getElementById('readtimeEditor'),{
                mode: {name: 'javascript', json: true}
            })
        }
        init()
    }, [])

    return <textarea id="realtimeEditor"></textarea>;
}

export default MainContent