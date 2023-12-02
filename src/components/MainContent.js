import React, { useEffect, useRef } from 'react'
import Codemirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/blackboard.css'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'
import ACTIONS from '../Actions'

const MainContent = ({socketRef, roomId}) => {
    const editorRef = useRef(null)

    useEffect(() => {
        async function init() {
            editorRef.current = Codemirror.fromTextArea(
                document.getElementById('realtimeEditor'), {
                    mode: {name: 'javascript', json: true},
                    theme: 'blackboard',
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                    lineNumbers: true,
                }
            )

            editorRef.current.on('change', (instance, changes) => {
                const {origin} = changes
                const code = instance.getValue()
                if (origin !== 'setValue') {
                    socketRef.current.emit(ACTIONS.CODE_CHANGE, {
                        roomId,
                        code,

                    })
                }
            })  
        }
        init()
    }, [])
    
    useEffect(() => {
        if(socketRef.current) {
            socketRef.current.on(ACTIONS.CODE_CHANGE, ({code}) => {
                if (code !== null) {
                    editorRef.current.setValue(code)
                }
            })
        }

        return () => {
            socketRef.current.off(ACTIONS.CODE_CHANGE)
        }
    }, [socketRef.current])

    return <textarea id="realtimeEditor"/>;
}

export default MainContent