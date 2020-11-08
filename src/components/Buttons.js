import React, {useState} from 'react'
import Modal from './Modal_Form'



function Basket() {
    return (
        <button className="btn">Basket</button>
    )
}


export default function Buttons () {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
    <div className ="buttons">
        <Basket/>
            <button className="btn" onClick={()=>setIsOpen(true)}>Registration</button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
    </div>
    )
}