import { Checkbox } from '@material-ui/core'
import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import { addToBasket } from '../redux/actions'
import { deleteProductsFromBasket } from '../redux/actions'


const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '50px',
    maxHeight: '100vh',
    overflow: 'auto',
    zIndex: 1000
}

const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

function ProductList ({ product, deleteProductsFromBasket}){
  const [productList, setProductList] = useState(product)

  // const refChecked = React.createRef(); // for checkbox

  function handleClick(){

    deleteProductsFromBasket(product)
    setProductList(product)
  }


  return (

    <div className="card">
 
        <div className="beer-name"> { product.name } </div>
        <div className="beer-img"> <img src={ product.image_url }/> </div>
        <div className="descr"> { product.description } </div>
        <button className="removeFromBasket" onClick={handleClick} >Remove</button>
    </div>
  )
}


 const ModalBasket = ( {open, onCloseBasket, deleteProductsFromBasket, basket, checked} ) => {
    if(!open) return null

    return ReactDom.createPortal(
      <>
        <div style={OVERLAY_STYLE} onClick={onCloseBasket} />      
        <div style={ MODAL_STYLES }>
        <div className="catalog">
        {
          basket.map(product => 
            <ProductList product={product} key={product.id} deleteProductsFromBasket={deleteProductsFromBasket} checked={checked}/> 
         )
        }
        </div>
        <button onClick={onCloseBasket} className="closeBasket">Close</button>
        
        </div>
        
      </>,
      document.getElementById('portal-basket')
    )
}



const mapStateToProps = state => {
  return {
    basket: state.productsBasket.basket,
    checked: state.productsBasket.checked
  }
}

const mapDispatchToProps  = {
  addToBasket: addToBasket, 
  deleteProductsFromBasket: deleteProductsFromBasket
}


export default connect(mapStateToProps, mapDispatchToProps)(ModalBasket)