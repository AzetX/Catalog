import React from 'react'


function All() {
    return (
        <div>
            All
        </div>
    )
}

function Low() {
    return (
        <div>
            0% - 4.5%
        </div>
    )
}

function Standart() {
    return (
        <div>
            4.6% - 7.5%
        </div>
    )
}

function Strong() {
    return (
        <div>
            7.6% - 50%
        </div> 
    )
}


export default function Filter(){
    return(
        <div className='sorting-alco'>
            <div className='all-alco'> <All /> </div>
            <div className='low-alco'> <Low /> </div>
            <div className='standart-alco'> <Standart /> </div>
            <div className='strong-alco'> <Strong /> </div>
        </div>
    )
}




