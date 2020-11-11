import React, { useState } from 'react'
import ReactDom from 'react-dom'


const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
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


export default function MdalBasket( {open, children, onCloseBasket} ) {
    if(!open) return null
 
    return ReactDom.createPortal(
      <> 
        <div style={OVERLAY_STYLE} onClick={onCloseBasket}/>      
        <div style={MODAL_STYLES}>
        <div>{children}</div>
        <button onClick={onCloseBasket}>&#10060;</button>
        </div>
        
      </>,
      document.getElementById('portal-basket')
    )
}

