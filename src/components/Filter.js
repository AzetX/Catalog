import React from 'react'


export default function Filter({filter, paginate}){

    return(
        <div className='sorting-alco'>
            <div className='all-beers' onClick={e => {filter("All"); paginate(1)}}> All </div>
            <div className='weak-beers' onClick={e => {filter("Weak"); paginate(1)}}> 0% - 4.5% </div>
            <div className='middle-beers' onClick={e =>{ filter("Middle"); paginate(1)}}> 4.6% - 7.5% </div>
            <div className='strong-beers' onClick={e =>{ filter("Strong"); paginate(1)}}> 7.6% - 50% </div>
        </div>
    )
}




