import React, { useEffect, useState } from 'react'


function FindBeers({findBeer, paginate}){
    const [currentPage, setCurrentPage] = useState(1)//current page
    const [productsPerPage, setProductsPerPage] = useState(6) 

    const indexOfLastProd = currentPage * productsPerPage//last post
    const indexOfFirstProd = indexOfLastProd - productsPerPage //first post
    const currentProd = findBeer.slice(indexOfFirstProd, indexOfLastProd)//kol product on page
        const pagesNumbers = []
  
        for(let i = 1; i <= Math.ceil(currentProd.length / productsPerPage); i++){
            pagesNumbers.push(i)
       
        } 
       console.log(pagesNumbers)

    return (
     
        <div className="catalog">
            {
                   currentProd.map(beer => 
                    <div className="card" key={ beer.id }> 
                        <div className="beer-name"> { beer.name } </div>
                        <div className="beer-img"> <img src={ beer.image_url }/> </div>
                        <div className="descr"> { beer.description } </div>
                    </div>)
            }
        </div>
    )
}
    
function CatalogBeers({productsPagiante, value, findBeer, paginate}) {
    if(value!=""){
        return (<FindBeers findBeer={findBeer} paginate={paginate}/>)
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
    const findBeer = productsFind.filter(beer => beer.name.toLowerCase().includes(value.toLowerCase()))
    return (
        <CatalogBeers productsPagiante={productsPagiante} value={value} findBeer={findBeer}/>
   )  
}
}