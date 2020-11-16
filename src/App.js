import React, { useEffect, useState } from 'react'
import Buttons from './components/Buttons'
import FindProduct from './components/FindProduct'
import Filter from './components/Filter'
import TableProducts from './components/TableProducts'
import Pagination from './components/Pagination'


function App() {

  const [products, setProducts] = useState([]) 
  const [loading, setLoading] = useState(false) 
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(6) 
  const [currFilter, setFilter] = useState('All')
  const [value, setValue] = useState('')
  
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


  const getCurrentProd = () => {
    const indexOfLastProd = currentPage * productsPerPage;
    const indexOfFirstProd = indexOfLastProd - productsPerPage;

    switch (currFilter){
      case 'Weak':
      const weakBeers = products.filter(beer => beer.abv <= 4.5 )
      const currentProdWeak = weakBeers.slice(indexOfFirstProd, indexOfLastProd)
      return [currentProdWeak, weakBeers];
      break;
      case 'Middle':
      const midBeers = products.filter(beer => beer.abv > 4.5 && beer.abv <= 7.5)
      const currentProdMiddle = midBeers.slice(indexOfFirstProd, indexOfLastProd)
      return [currentProdMiddle, midBeers]
      break;
      case 'Strong':
      const strongBeers = products.filter(beer => beer.abv > 7.5 && beer.abv <= 50) 
      const currentProdStrong = strongBeers.slice(indexOfFirstProd, indexOfLastProd)
      return [currentProdStrong, strongBeers]
      break;
      default: 
      const currentProd = products.slice(indexOfFirstProd, indexOfLastProd)
      return [currentProd, products];
    }
  }
    

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const filter = (filterBeer) => {
    setFilter(filterBeer)
  }

  const findProduct = (findBeer) => {
    setValue(findBeer)
  }

  return (
    <div className="App">
      <div className="header">
        <Buttons />
      </div>
      <div className="main">
        <FindProduct currInput={value} findProduct={findProduct} setValue={setValue} setProductsPerPage={setProductsPerPage} />
        <Filter filter={filter} paginate={paginate} setValue={setValue}/>
        <TableProducts productsPagiante={getCurrentProd()[0]} productsFind={getCurrentProd()[1]} loading={loading} value={value} paginate={paginate}/>
        <Pagination productsPerPage={productsPerPage} totalPosts={getCurrentProd()[1].length} paginate={paginate} value={value}/> 

      </div>
    </div>
   
  );
}

export default App
