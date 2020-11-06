import React, { useEffect, useState } from 'react'


function FindBeers({findBeer}){
    
    return (
        <div className="catalog">
            {
                   findBeer.map(beer => 
                    <div className="card" key={ beer.id }> 
                        <div className="beer-name"> { beer.name } </div>
                        <div className="beer-img"> <img src={ beer.image_url }/> </div>
                        <div className="descr"> { beer.description } </div>
                    </div>)
            }
        </div>
    )

}
    

function CatalogBeers({productsPagiante, value, findBeer}) {
    if(value!=""){
        return (<FindBeers findBeer={findBeer}/>)
    }
   return (   
   <div className="catalog">
        {
            productsPagiante.map(product => 
                            <div className="card" key={ product.id }> 
                                <div className="beer-name"> { product.name } </div>
                                <div className="beer-img"> <img src={ product.image_url }/> </div>
                                <div className="descr"> { product.description } </div>
                            </div>
            )
        }
    </div>
)
 
}


export default function TableProducts( { productsPagiante, productsFind, loading, value, paginate} ) {
    if(loading) {
        return <div>LOADING...</div>
    }

    {
    // console.log('Filter:', productsPagiante)
    // console.log('All:',productsFind)
 
    
    const findBeer = productsFind.filter(beer => beer.name.toLowerCase().includes(value.toLowerCase()))
    // console.log(findBeer)
    return (
        <CatalogBeers productsPagiante={productsPagiante} value={value} findBeer={findBeer}/>
   )
    
}


}