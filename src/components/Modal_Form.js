import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}



function CheckNameUser(){
    return (
        ``
    )
}

function CheckDateOfBirthUser(){
    return (
        ``
    )
}

function CheckPasswordUser(){
    return (
        ``
    )
}
function CheckMailUser(){
    return (
        ``
    )
}


export default function Modal( {open, children, onClose} ) {
    if(!open) return null


    return ReactDom.createPortal(
      <> 
        <div style={OVERLAY_STYLE} onClick={onClose}/>      
        <div style={MODAL_STYLES}>
        <input type="text" placeholder="Full name..." />
        <input type="Date" />
        <input type="password" />
        <input type="email"/>
        <button onClick={onClose}>Follow</button>
        <button onClick={onClose}>Close</button>
        <div>{children}</div>
        </div>
        
      </>,
      document.getElementById('portal')
    )
}