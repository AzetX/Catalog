import React, { useEffect, useState } from 'react'
import Checkboxes from './Checkbox'


export function ListBeers({product}) {
    return (
    <div className="card"> 
        <div className="beer-name"> { product.name } </div>
        <div className="beer-img"> <img src={ product.image_url }/> </div>
        <div className="descr"> { product.description } </div>
        <div className="addToBasket">Add to basket:<Checkboxes product={product}/></div>
   
    </div>
    )
} // for rendering



  

function FindBeers ({findBeer}) {
    const [currentPage] = useState(1)//current page
    const [productsPerPage] = useState(6) 

    const indexOfLastProd = currentPage * productsPerPage//last post
    const indexOfFirstProd = indexOfLastProd - productsPerPage //first post
    const currentProd = findBeer.slice(indexOfFirstProd, indexOfLastProd)//kol product on page
        const pagesNumbers = []
  
        for(let i = 1; i <= Math.ceil(currentProd.length / productsPerPage); i++){
            pagesNumbers.push(i)
       
        } 

    return (
     
        <div className="catalog">
            {
                   currentProd.map(beer => 
                     <ListBeers key={beer.id} product={beer}/>
                    )
            }
           
        </div>
    )
}


function CatalogBeers ({productsPagiante, value, findBeer}) {
    if(value!=""){
        return (<FindBeers findBeer={findBeer}/>)
    }

   return (   
   <div className="catalog">
        {
            productsPagiante.map(product =>     
                <ListBeers  key={ product.id } product={product} />
            )
        }
    </div>
)
}



const TableProducts = ( { productsPagiante, productsFind, loading, value} ) => {
    if(loading) {
        return <div>LOADING...</div>
    }
    
    
    const findBeer = productsFind.filter(beer => beer.name.toLowerCase().includes(value.toLowerCase()))

    return (
        <CatalogBeers productsPagiante={productsPagiante} value={value} findBeer={findBeer}/>
   )  

}



export default TableProducts
