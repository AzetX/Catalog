import React from 'react'


export default function Filter({filter, paginate, setValue}){
   

    return(
        <div className='sorting-alco alco-item'>
            <div className='all-beers' onClick={ e => {filter("All"); paginate(1); setValue('');}}> All </div>
            <div className='weak-beers' onClick={e => {filter("Weak"); paginate(1); setValue(''); }}> 0% - 4.5% </div>
            <div className='middle-beers' onClick={e =>{ filter("Middle"); paginate(1); setValue(''); }}> 4.6% - 7.5% </div>
            <div className='strong-beers' onClick={e =>{ filter("Strong"); paginate(1); setValue('');}}> 7.6% - 50% </div>
        </div>
    )
}




