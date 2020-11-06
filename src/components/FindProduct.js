import React from 'react'


export default function FindProduct({ products, currInput, findProduct, setValue}){
    
    function handleClick(event) {
        event.preventDefault()
        
        if(currInput.trim()){
            setValue("")
        }
    }
        
    return (
        <div className="search-product">
            <form onSubmit={handleClick}>   
                <input type="text" placeholder="Search..." value={currInput} onChange={e => {findProduct(e.target.value);}} />   
            </form>
        </div>
    )
} 




