import React from 'react'
import './CheckoutProduct.css'
import { useStatevalue } from './StateProvider';

const CheckoutProduct = ({ id , image , title , price , rating}) => {
    const [{ basket } , dispatch] = useStatevalue();
    const removeFromBasket = () =>{
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id : id
        })
    }
  return (
    <div className='checkoutProduct'>
      <img src={image} className='checkoutProduct_image'/>
      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_price'>
            <small>$</small>
            <small>{price}</small>
        </p>
        <div className='checkoutProduct_rating'>
            {Array(rating).fill().map((_ , i) =>(
                <p className='fa fa-star checked'></p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
