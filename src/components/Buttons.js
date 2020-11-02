import React from 'react'



function Basket() {
    return ( 
        <button className="btn" onClick={'Basket'}>Basket</button> 
    )
}

function FormRegistation() {
    return (
        <button className="btn" onClick={'Registration'}>Registration</button>
    )
}


export default function Buttons () {
    return (
    <div className ="buttons">
        < FormRegistation/>
        < Basket/>
    </div>
    )
}