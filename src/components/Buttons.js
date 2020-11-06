import React, {useState} from 'react'
import Modal from './Modal_Form'




// class Portal extends Buttons() {
    
//     el = document.createElement('div')
    
    
// }


// function FormRegistation() {
   
//     return ( 
//         <button className="btn" onClick={console.log('add')}>Registration</button> 
//     )
// }

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
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>adadada</Modal>
    </div>
    )
}