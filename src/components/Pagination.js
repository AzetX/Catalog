import React from 'react'



function ListItem({paginate, page}) {
   return ( 
     <li>
         <a onClick={() => paginate(page)} href="!#" className="page-link"> {page} </a>
     </li> 
   )
}



export default function Pagination({productsPerPage, totalPosts, paginate, value}) {
    
    const pagesNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / productsPerPage); i++){
        pagesNumbers.push(i)
    } 
  
    
    return (
        <nav>
            <ul className="pagination">

              { pagesNumbers.map(page => {
                  return <ListItem key={page} className="page-beer" paginate={paginate} page={page}/>
              }) }
               
            </ul>
        </nav>
      
    )    
}