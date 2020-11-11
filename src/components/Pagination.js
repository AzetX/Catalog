import React from 'react'



function ListItem({paginate, page}) {
    function handleClick(event){
        event.preventDefault()
    }

   return ( 
     <li>
         <a onClick={(event) => {paginate(page); handleClick(event)}} href="!#" className="page-link"> {page} </a>
     </li> 
   )
}

export default function Pagination({productsPerPage, totalPosts, paginate, value}) {
    
    const pagesNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / productsPerPage); i++){
        pagesNumbers.push(i)
    } 

    let pages = (pagesNumbers.length>=1 && value!='') ? pagesNumbers.filter(i => i===1): pagesNumbers
    return (
        <nav>
            <ul className="pagination">

              { pages.map(page => {
                  return <ListItem key={page} className="page-beer" paginate={paginate} page={page} value={value}/>
              }) }
               
            </ul>
        </nav>
      
    )    
}//for rendering paginate


