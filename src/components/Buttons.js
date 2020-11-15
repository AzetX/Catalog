import React, {useState} from 'react'
import ModalRegistration from './Registration_Modal_Form.js'
import ModalBasket from './ModalBasket'



 const Buttons = () => {
    const [isOpen, setIsOpen] = useState(false)//for registration form
    const [isOpenBasket, setIsOpenBasket] = useState(false)//for basket

    
    return (
    <div className ="buttons">
              <button className="btn" onClick={()=>setIsOpenBasket(true)}>Basket</button>
              <ModalBasket open={isOpenBasket} onCloseBasket={() => setIsOpenBasket(false)}></ModalBasket>

            <button className="btn" onClick={()=>setIsOpen(true)}>Registration</button>
            <ModalRegistration open={isOpen} onClose={() => setIsOpen(false)}></ModalRegistration>
    </div>
    )
}


export default Buttons
