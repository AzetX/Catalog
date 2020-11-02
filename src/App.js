import React from 'react'
import Buttons from './components/Buttons'
import FindProduct from './components/FindProduct'
import Filter from './components/Filter'
import TableProducts from './components/TableProducts'
import Pagination from './components/Pagination'


function App() {
  let listPagination = [1, 2, 3, 4]//[{id: 1}, {id: 2}]

  return (
    <div className="App">
      <div className="header">
        <Buttons />
      </div>
      <div className="main">
        <FindProduct />
        <Filter />
        {/* <TableProducts /> */}
        <Pagination lists={ listPagination }/> 
      </div>
    </div>
   
  );
}

export default App;
