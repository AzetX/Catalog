import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux'
import { addToBasket } from '../redux/actions'
import { deleteProductsFromBasket } from '../redux/actions'


const Checkboxes = ({product, addToBasket, deleteProductsFromBasket}) => { // checked param
  
  const [checked, setChecked] = useState(false);
  
  const handleChange = (event) => {
   
    if(event.target.checked === true){
      addToBasket(product)
    }
    else {
      deleteProductsFromBasket(product)
    }
  
    setChecked(event.target.checked);
  
   
  };
  

  return (
    <div>
     
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
}



const mapStateToProps = state => { //преобразовывает весь стейт в пропсы
  return {    
      productsBasket: state.productsBasket.basket
      // checked: state.productsBasket.checked
  }
}

const mapDispatchToProps  = {
  addToBasket: addToBasket, 
  deleteProductsFromBasket: deleteProductsFromBasket
}

 

export default connect(mapStateToProps, mapDispatchToProps)(Checkboxes)
