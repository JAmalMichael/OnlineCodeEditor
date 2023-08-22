import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

export default function Javascript(props) {
    const {
        language, displayName, value, onChange
    } = props

    function handleChange(editor, data, value) {
        onChange(value)
    }

    const [open, setOpen] = useState('')
    return (
        <div className='editor-container'> 
            <div className='editor-title'>
                {displayName}
                <button 
                type='button'
                className='expand-collapse-button'
                onClick={() => setOpen(prevOpen => !prevOpen)}>
                   <FontAwesomeIcon icone = {open ? faCompressAlt : faExpandAlt}/>
                </button>
            </div>
            <ControlledEditor 
            onBeforeChange={handleChange}
            value={value}
            className='code-mirror-wrapper'
            options={
                {
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material'
                }
            }
            />
        </div>)
}