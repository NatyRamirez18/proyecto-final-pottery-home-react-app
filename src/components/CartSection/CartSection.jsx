import React, { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { createOrder } from '../../services/firestore';
import { useNavigate } from 'react-router-dom';

import ButtonAll from '../ButtonAll/ButtonAll';
import CartForm from './CartForm';
import './cartSection.css';

function CartSection() {
   
    const {cart, removeItem, clear, priceInCart} = useContext(cartContext);

    let navigate= useNavigate();


    if (cart.length === 0) 
    return <h2>Nothing in Cart yet</h2>;
  

    async function handleCheckOut(evt, data){
      const order={
        buyer: data,
        items:[],
        total:0,
        date: new Date(),
      };


      const orderId= await createOrder(order);
      navigate(`/thankyou/${orderId}`)
      clear();




    }


  return (
    <div className='text-center d-flex flex-column  cart-cont '>
        {cart.map((item)=>(
          
        <div className='px-5 d-flex flex-row my-5' key={item.id}>
          <div className=' d-flex flex-row mb-3 px-5'>
            <h2>{item.title}</h2>
            <div >
            <img className='w-25 rounded' src={item.thumbnail} alt={item.title} />
            </div>
            <div className='inner-cart'>
            <h4>${item.price}</h4>
            <h4> Items: {item.count}</h4>
            </div>
          </div>
            <div className=''>
            <ButtonAll onTouchButton ={()=>removeItem(item.id) } colorBtn="red">X</ButtonAll>
        </div>
        </div>
       ) )} 
       <div className=''>
      <h2>Total price $ {priceInCart()}</h2> 
      </div>


     
          <br /><br /><br />
          <div className='position-relative px-5 py-5'>
      <div className=' position-relative end-0'>
      <CartForm onSubmit={handleCheckOut}/>
      
      <ButtonAll className="my-3 rounded" onTouchButton={()=>clear() }>Empty Cart</ButtonAll>
      </div>
      </div>

    </div>
  );
}

export default CartSection;