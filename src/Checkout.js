import React from 'react'
import './Checkout.css'
import checkout_banner from './Assets/checkout_banner.jpg'
import Subtotal from './Subtotal'
import { useStatevalue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

const Checkout = () => {
  const [{ basket , user } , dispatch] = useStatevalue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img src={checkout_banner} alt='' className='checkout_Ad'/>
        <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className='checkout_title'>
                Your shopping Basket
            </h2> 
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
                rating={item.rating}
              />
            ))}
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
