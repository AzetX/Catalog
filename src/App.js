import React, { useEffect, useState } from 'react'
import Buttons from './components/Buttons'
import FindProduct from './components/FindProduct'
import Filter from './components/Filter'
import TableProducts from './components/TableProducts'
import Pagination from './components/Pagination'


function App() {

  const [products, setProducts] = useState([]) //all products
  const [loading, setLoading] = useState(false) //loading
  const [currentPage, setCurrentPage] = useState(1)//current page
  const [productsPerPage, setProductsPerPage] = useState(6) // kol products on page
  const [currFilter, setFilter] = useState('All')//filter
  const [value, setValue] = useState('')//input
  


  useEffect(() => {
      const fetchProducts = async () => {
          setLoading(true)
          const response = await fetch("https://api.punkapi.com/v2/beers")
          const json = await response.json()
          setProducts(json)
          setLoading(false)
      }

      fetchProducts();      
  }, [])


  //Get curr posts
  const getCurrentProd = () => {
  if(currFilter==='All') { 
  const indexOfLastProd = currentPage * productsPerPage//last post
  const indexOfFirstProd = indexOfLastProd - productsPerPage //first post
  const currentProd = products.slice(indexOfFirstProd, indexOfLastProd)//get necassary post
  return [currentProd, products]
  }
  else if(currFilter==='Weak'){
    const weakBeers = products.filter(beer => beer.abv <= 4.5 )
    const indexOfLastProd = currentPage * productsPerPage
    const indexOfFirstProd = indexOfLastProd - productsPerPage
    const currentProd = weakBeers.slice(indexOfFirstProd, indexOfLastProd)//get necassary post
    return [currentProd, weakBeers]
  }
  else if(currFilter==='Middle'){
    const midBeers = products.filter(beer => beer.abv > 4.5 && beer.abv <= 7.5)
    const indexOfLastProd = currentPage * productsPerPage
    const indexOfFirstProd = indexOfLastProd - productsPerPage
    const currentProd = midBeers.slice(indexOfFirstProd, indexOfLastProd)//get necassary post
    return [currentProd, midBeers]
  }
  else if(currFilter==='Strong'){
    const strongBeers = products.filter(beer => beer.abv > 7.5 && beer.abv <= 50)
    const indexOfLastProd = currentPage * productsPerPage
    const indexOfFirstProd = indexOfLastProd - productsPerPage
    const currentProd = strongBeers.slice(indexOfFirstProd, indexOfLastProd)//get necassary post
    return [currentProd, strongBeers]
  }

  }

  //Change page 
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const filter = (filterBeer) => {
    setFilter(filterBeer)
  }

  const findProduct = (findBeer) => {
    setValue(findBeer)
  }//не забудь вернуть стэйт
  console.log(value)

 


  return (
    <div className="App">
      <div className="header">
        <Buttons />
      </div>
      <div className="main">
        <FindProduct products={getCurrentProd()[1]} currInput={value} findProduct={findProduct} setValue={setValue} />
        <Filter filter={filter} paginate={paginate}/>
        <TableProducts productsPagiante={getCurrentProd()[0]} productsFind={getCurrentProd()[1]} loading={loading} value={value} paginate={paginate}/>
        <Pagination productsPerPage={productsPerPage} totalPosts={getCurrentProd()[1].length} paginate={paginate} /> 
      </div>
    </div>
   
  );
}

export default App;
